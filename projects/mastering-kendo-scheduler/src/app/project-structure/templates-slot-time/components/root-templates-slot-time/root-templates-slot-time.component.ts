import { Component, OnInit } from '@angular/core';

import { FgSchedulerComponent } from './../../../../../../../.common/components/fg-scheduler.component';

@Component({
  selector: 'fg-root-templates-slot-time',
  templateUrl: './root-templates-slot-time.component.html',
  styleUrls: ['./root-templates-slot-time.component.scss']
})
export class RootTemplatesSlotTimeComponent extends FgSchedulerComponent {
  pageTitle = 'Time Slot';
}
