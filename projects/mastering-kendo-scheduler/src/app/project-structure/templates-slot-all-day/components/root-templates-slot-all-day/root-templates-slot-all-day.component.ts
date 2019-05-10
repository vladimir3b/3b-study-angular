import { Component, OnInit } from '@angular/core';

import { FgSchedulerComponent } from './../../../../../../../.common/components/fg-scheduler.component';

@Component({
  selector: 'fg-root-templates-slot-all-day',
  templateUrl: './root-templates-slot-all-day.component.html',
  styleUrls: ['./root-templates-slot-all-day.component.scss']
})
export class RootTemplatesSlotAllDayComponent extends FgSchedulerComponent {
  pageTitle = 'All-Day Slot';
}
