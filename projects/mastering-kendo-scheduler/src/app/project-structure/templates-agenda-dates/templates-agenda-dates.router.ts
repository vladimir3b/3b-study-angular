import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootTemplatesAgendaDatesRouter } from './components/root-templates-agenda-dates/root-templates-agenda-dates.component';

const ROUTES: Routes = [{
  path: 'templates-agenda-dates',
  component: RootTemplatesAgendaDatesRouter
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class TemplatesAgendaDatesRouter { }
