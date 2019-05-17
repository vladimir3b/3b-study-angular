import { FgSchedulerComponent } from './../../../../../../../.common/components/fg-scheduler.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-slots-time',
  templateUrl: './slots-time.component.html',
  styles: []
})
export class SlotsTimeComponent extends FgSchedulerComponent {
  pageTitle = 'Time Slot';
}
