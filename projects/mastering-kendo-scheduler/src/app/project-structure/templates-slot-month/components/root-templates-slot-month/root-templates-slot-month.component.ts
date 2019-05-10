import { Component, OnInit } from '@angular/core';

import { FgSchedulerComponent } from './../../../../../../../.common/components/fg-scheduler.component';

@Component({
  selector: 'fg-root-templates-slot-month',
  templateUrl: './root-templates-slot-month.component.html',
  styleUrls: ['./root-templates-slot-month.component.scss']
})
export class RootTemplatesSlotMonthComponent extends FgSchedulerComponent {
  pageTitle = 'Month Slot';
}
