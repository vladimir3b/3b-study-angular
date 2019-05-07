import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootTemplatesAgendaTimesComponent } from './components/root-templates-agenda-times/root-templates-agenda-times.component';

const ROUTES: Routes = [{
  path: 'templates-agenda-times',
  component: RootTemplatesAgendaTimesComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class TemplatesAgendaTimesRouter { }
