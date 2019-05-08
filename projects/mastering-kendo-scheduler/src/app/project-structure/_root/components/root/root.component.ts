import { Component, OnInit } from '@angular/core';

import { A_FEW_EVENTS } from './../../../../../../../.common/dumb-data/scheduler/a-few-events.data';
import { ManageEventsService } from './../../../../../../../.common/services/manage-events.service';

@Component({
  selector: 'fg-root',
  templateUrl: './root.component.html'
})
export class RootComponent {
  constructor(private _manageEvents: ManageEventsService) {
    this._manageEvents.initializeEvens();
    A_FEW_EVENTS.forEach(event => this._manageEvents.addEvent({
      id: event.eventId,
      title: event.title,
      description: event.description,
      isAllDay: event.allDayEvent,
      start: new Date(event.startingMoment),
      end: new Date(event.endingMoment)
    }));
  }
}

