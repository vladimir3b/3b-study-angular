import { Component } from '@angular/core';

@Component({
  selector: 'fg-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  navigationLink = [
    {
      path: 'templates-event-rendering',
      label: 'Templates Event Rendering'
    },
    {
      path: 'templates-event-all-day',
      label: 'Templates All Day Event '
    }
  ];
}
