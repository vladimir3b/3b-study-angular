import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BasicExampleRouter } from './../basic_example/basic-example.router';
import { TemplatesHeaderMinorTimeRouter } from './../templates-header-minor-time/templates-header-minor-time.router';
import { TemplatesHeaderMajorTimeRouter } from './../templates-header-major-time/templates-header-major-time.router';
import { TemplatesHeaderGroupRouter } from './../templates-header-group/templates-header-group.router';
import { TemplatesHeaderDateRouter } from './../templates-header-date/templates-header-date.router';
import { TemplatesAgendaTimesRouter } from './../templates-agenda-times/templates-agenda-times.router';
import { TemplatesAgendaDatesRouter } from './../templates-agenda-dates/templates-agenda-dates.router';
import { TemplatesEventRenderingRouter } from './../templates-event-rendering/templates-event-rendering.router';
import { TemplatesEventAllDayRouter } from '../templates-event-all-day/templates-event-all-day.router';
import { TemplatesSlotTimeRouter } from '../templates-slot-time/templates-slot-time.router';
import { TemplatesSlotMonthRouter } from '../templates-slot-month/templates-slot-month.router';
import { TemplatesSlotAllDayRouter } from '../templates-slot-all-day/templates-slot-all-day.router';

const ROUTER: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: '/basic-example',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

const EXTERNAL_ROUTERS = [
  BasicExampleRouter,
  TemplatesAgendaDatesRouter,
  TemplatesAgendaTimesRouter,
  TemplatesEventAllDayRouter,
  TemplatesEventRenderingRouter,
  TemplatesHeaderDateRouter,
  TemplatesHeaderGroupRouter,
  TemplatesHeaderMajorTimeRouter,
  TemplatesHeaderMinorTimeRouter,
  TemplatesSlotAllDayRouter,
  TemplatesSlotMonthRouter,
  TemplatesSlotTimeRouter
];

@NgModule({
  imports: [
    ...EXTERNAL_ROUTERS,
    RouterModule.forRoot(ROUTER)
  ],
  exports: [
    RouterModule,
    ...EXTERNAL_ROUTERS
  ]
})
export class RootRouter { }
