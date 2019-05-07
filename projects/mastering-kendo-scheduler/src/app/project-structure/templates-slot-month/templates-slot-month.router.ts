import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootTemplatesSlotMonthComponent } from './components/root-templates-slot-month/root-templates-slot-month.component';

const ROUTES: Routes = [{
  path: 'templates-slot-month',
  component: RootTemplatesSlotMonthComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class TemplatesSlotMonthRouter { }
