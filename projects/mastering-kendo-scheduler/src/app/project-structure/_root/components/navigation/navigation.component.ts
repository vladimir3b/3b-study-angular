import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'fg-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  navigationLink = [
    {
      path: 'basic-example',
      label: 'Basic Example'
    },
    {
      path: 'templates-agenda-dates',
      label: 'Templates Agenda Dates'
    },
    {
      path: 'templates-agenda-times',
      label: 'Templates Agenda Times'
    },
    {
      path: 'templates-event-all-day',
      label: 'Templates Event All Day'
    },
    {
      path: 'templates-event-rendering',
      label: 'Templates Event Rendering'
    },
    {
      path: 'templates-header-date',
      label: 'Templates Header Date'
    },
    {
      path: 'templates-header-group',
      label: 'Templates Header Group'
    },
    {
      path: 'templates-header-major-time',
      label: 'Templates Header Major Time'
    },
    {
      path: 'templates-header-minor-time',
      label: 'Templates Header Minor Time'
    },
    {
      path: 'templates-slot-all-day',
      label: 'Templates Slot All Day'
    },
    {
      path: 'templates-slot-month',
      label: 'Templates Slot Month'
    },
    {
      path: 'templates-slot-time',
      label: 'Templates Slot Time'
    },
  ];

  constructor(private _router: Router) { }

  tabSelected(event: MatTabChangeEvent) {
    this._router.navigateByUrl(`/${this.navigationLink[event.index].path}`);
  }
}
