import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootTemplatesSlotAllDayComponent } from './components/root-templates-slot-all-day/root-templates-slot-all-day.component';

const ROUTES: Routes = [{
  path: 'templates-slot-all-day',
  component: RootTemplatesSlotAllDayComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class TemplatesSlotAllDayRouter { }
