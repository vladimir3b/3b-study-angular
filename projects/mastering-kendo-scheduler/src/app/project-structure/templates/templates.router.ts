import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EventsRenderingComponent } from './components/events-rendering/events-rendering.component';
import { EventsAllDayComponent } from './components/events-all-day/events-all-day.component';
import { SlotsMonthComponent } from './components/slots-month/slots-month.component';
import { SlotsTimeComponent } from './components/slots-time/slots-time.component';
import { SlotsAllDayComponent } from './components/slots-all-day/slots-all-day.component';

const ROUTES: Routes = [
  {
    path: 'templates',
    redirectTo: 'templates/events-rendering',

  },
  {
    path: 'templates/events-rendering',
    component: EventsRenderingComponent
  },
  {
    path: 'templates/events-all-day',
    component: EventsAllDayComponent
  },
  {
    path: 'templates/slots-all-day',
    component: SlotsAllDayComponent
  },
  {
    path: 'templates/slots-time',
    component: SlotsTimeComponent
  },
  {
    path: 'templates/slots-month',
    component: SlotsMonthComponent
  }
];

export const TEMPLATES_ROUTES = [
  {
    path: 'templates',
    label: 'Template',
    navigationLink: [
      {
        path: 'events-rendering',
        label: 'Events Rendering'
      },
      {
        path: 'events-all-day',
        label: 'All Day Events'
      },
      {
        path: 'slots-all-day',
        label: 'All-Day Slots'
      },
      {
        path: 'slots-time',
        label: 'Time Slots'
      },
      {
        path: 'slots-month',
        label: 'Month Slots'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class TemplatesRouter { }
