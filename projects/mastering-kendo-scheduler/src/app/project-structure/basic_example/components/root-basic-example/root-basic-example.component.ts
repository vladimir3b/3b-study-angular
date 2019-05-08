import { Component } from '@angular/core';

import { SchedulerComponent } from './../../../../../../../.common/classes/scheduler.component';

@Component({
  selector: 'fg-root-basic-example',
  templateUrl: './root-basic-example.component.html',
  styleUrls: ['./root-basic-example.component.scss']
})
export class RootBasicExampleComponent extends SchedulerComponent {
  pageTitle = 'Basic usage';
}
