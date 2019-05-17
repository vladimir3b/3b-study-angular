import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EventsRenderingComponent } from './components/events-rendering/events-rendering.component';
import { EventsAllDayComponent } from './components/events-all-day/events-all-day.component';
import { SlotsMonthComponent } from './components/slots-month/slots-month.component';
import { SlotsTimeComponent } from './components/slots-time/slots-time.component';
import { SlotsAllDayComponent } from './components/slots-all-day/slots-all-day.component';
import { HeadersMajorTimeComponent } from './components/headers-major-time/headers-major-time.component';
import { HeadersMinorTimeComponent } from './components/headers-minor-time/headers-minor-time.component';
import { HeadersDateComponent } from './components/headers-date/headers-date.component';
import { HeadersGroupComponent } from './components/headers-group/headers-group.component';

const ROUTES: Routes = [
  {
    path: 'templates',
    redirectTo: 'templates/events-rendering',
    pathMatch: 'full'
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
  },
  {
    path: 'templates/headers-major-time',
    component: HeadersMajorTimeComponent
  },
  {
    path: 'templates/headers-minor-time',
    component: HeadersMinorTimeComponent
  },
  {
    path: 'templates/headers-date',
    component: HeadersDateComponent
  },
  {
    path: 'templates/headers-group',
    component: HeadersGroupComponent
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
      },
      {
        path: 'headers-major-time',
        label: 'Major Time Headers'
      },
      {
        path: 'headers-minor-time',
        label: 'Minor Time Headers'
      },
      {
        path: 'headers-date',
        label: 'Date Headers'
      },
      {
        path: 'headers-group',
        label: 'Group Headers'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class TemplatesRouter { }
