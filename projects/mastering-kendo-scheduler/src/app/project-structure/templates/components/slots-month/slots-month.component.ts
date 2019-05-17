import { FgSchedulerComponent } from './../../../../../../../.common/components/fg-scheduler.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-slots-month',
  templateUrl: './slots-month.component.html',
  styles: []
})
export class SlotsMonthComponent extends FgSchedulerComponent {
  pageTitle = 'Month Slots';
}
