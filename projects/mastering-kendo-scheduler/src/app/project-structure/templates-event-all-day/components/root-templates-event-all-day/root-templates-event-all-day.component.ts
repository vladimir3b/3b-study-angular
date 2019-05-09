import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:max-line-length
import { FgSchedulerComponent } from './../../../../../../../.common/components/fg-scheduler.component';

@Component({
  selector: 'fg-root-templates-event-all-day',
  templateUrl: './root-templates-event-all-day.component.html',
  styleUrls: ['./root-templates-event-all-day.component.scss']
})
export class RootTemplatesEventAllDayComponent extends FgSchedulerComponent {
  pageTitle = 'Event All Day';
}
