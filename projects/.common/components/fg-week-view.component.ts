import { Input, Component } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'fg-week-view',
  template: `
    <div class="text-center">
      {{ event.title }}
    </div>
  `
})
export class FgWeekViewComponent {
  @Input() event: SchedulerEvent;
}
