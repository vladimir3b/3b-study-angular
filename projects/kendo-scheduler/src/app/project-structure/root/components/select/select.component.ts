import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { random } from 'lodash';

import { ManageEventsService } from '../../../../../../../.common/services/manage-events.service';

@Component({
  selector: 'fg-select',
  templateUrl: './select.component.html'
})
export class SelectComponent {
  @Output() dataChanger: EventEmitter<Date> = new EventEmitter();

  constructor(private _manageEvents: ManageEventsService) { }

  onNewDate(dateString: string): void {
    this.dataChanger.emit(new Date(dateString));
  }
  changeEvent() {
    const index = random(0, this._manageEvents.events.length - 1, false);
    const event = this._manageEvents.events[index];
    this._manageEvents.updateEvent(event.id, {
      ...event,
      title: '<strong>Kiss</strong> Amber Rose Revah'
    });
    console.log(`Changed event with id ${event.id}.`);
  }

}
