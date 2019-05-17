import { FgSchedulerComponent } from './../../../../../../../.common/components/fg-scheduler.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-slots-all-day',
  templateUrl: './slots-all-day.component.html',
  styles: []
})
export class SlotsAllDayComponent extends FgSchedulerComponent {
  pageTitle = 'All-Day Slot';
}
