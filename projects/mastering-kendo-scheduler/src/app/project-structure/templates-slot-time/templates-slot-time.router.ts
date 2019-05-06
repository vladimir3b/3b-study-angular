import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootTemplatesEventAllDayComponent } from './components/root-templates-event-all-day/root-templates-event-all-day.component';

const ROUTES: Routes = [{
  path: 'templates-event-all-day',
  component: RootTemplatesEventAllDayComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class TemplatesEventAllDayRouter { }
