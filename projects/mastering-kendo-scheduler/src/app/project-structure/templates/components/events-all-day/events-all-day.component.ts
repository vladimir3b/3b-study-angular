import { FgSchedulerComponent } from './../../../../../../../.common/components/fg-scheduler.component';
import { Component } from '@angular/core';

@Component({
  selector: 'fg-events-all-day',
  templateUrl: './events-all-day.component.html',
  styles: []
})
export class EventsAllDayComponent extends FgSchedulerComponent {
  pageTitle = 'All-day events';
  resources: any[] = [{
    name: 'Rooms',
    data: [
      { text: 'Meeting Room 101', value: 'user1', color: '#00BCD4' },
      { text: 'Meeting Room 201', value: 'user2', color: '#FF5722' }
    ],
    field: 'id',
    valueField: 'value',
    textField: 'text',
    colorField: 'color'
  }];
}
