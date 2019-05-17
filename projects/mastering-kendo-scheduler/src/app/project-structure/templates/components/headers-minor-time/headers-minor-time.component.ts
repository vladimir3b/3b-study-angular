import { FgSchedulerComponent } from './../../../../../../../.common/components/fg-scheduler.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-headers-minor-time',
  templateUrl: './headers-minor-time.component.html',
  styles: []
})
export class HeadersMinorTimeComponent extends FgSchedulerComponent {
  pageTitle = 'Minor Time Headers';
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
