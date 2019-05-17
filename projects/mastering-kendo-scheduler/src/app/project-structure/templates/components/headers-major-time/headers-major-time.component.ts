import { FgSchedulerComponent } from './../../../../../../../.common/components/fg-scheduler.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-headers-major-time',
  templateUrl: './headers-major-time.component.html',
})
export class HeadersMajorTimeComponent extends FgSchedulerComponent {
  pageTitle = 'Major Time Headers';
  resources: any[] = [{
    name: 'Rooms',
    data: [
      { text: 'This belongs to user 1', value: 'user1', color: '#00BCD4' },
      { text: 'This belongs to user 2', value: 'user2', color: '#FF5722' }
    ],
    field: 'userId',
    valueField: 'value',
    textField: 'text',
    colorField: 'color'
  }];
}
