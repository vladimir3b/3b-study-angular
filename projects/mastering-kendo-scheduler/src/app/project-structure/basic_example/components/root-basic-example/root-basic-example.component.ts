import { Component } from '@angular/core';

import { FgSchedulerComponent } from '../../../../../../../.common/components/fg-scheduler.component';

@Component({
  selector: 'fg-root-basic-example',
  templateUrl: './root-basic-example.component.html',
  styleUrls: ['./root-basic-example.component.scss']
})
export class RootBasicExampleComponent extends FgSchedulerComponent {
  pageTitle = 'Basic usage';
}
