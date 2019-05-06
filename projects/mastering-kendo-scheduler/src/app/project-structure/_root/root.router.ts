import { TemplatesEventRenderingRouter } from './../templates-event-rendering/templates-event-rendering.router';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TemplatesEventAllDayRouter } from '../templates-event-all-day/templates-event-all-day.router';

const ROUTER: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: '/templates-event-rendering',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

const EXTERNAL_ROUTERS = [
  TemplatesEventAllDayRouter,
  TemplatesEventRenderingRouter,
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
