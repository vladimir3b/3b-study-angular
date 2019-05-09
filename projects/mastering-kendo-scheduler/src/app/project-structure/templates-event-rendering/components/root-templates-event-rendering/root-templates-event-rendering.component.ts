import { Component, OnInit } from '@angular/core';

import { FgSchedulerComponent } from './../../../../../../../.common/components/fg-scheduler.component';

@Component({
  selector: 'fg-root-templates-event-rendering',
  templateUrl: './root-templates-event-rendering.component.html',
  styleUrls: ['./root-templates-event-rendering.component.scss']
})
export class RootTemplatesEventRenderingComponent extends FgSchedulerComponent {
  pageTitle = 'Event Rendering';
}
