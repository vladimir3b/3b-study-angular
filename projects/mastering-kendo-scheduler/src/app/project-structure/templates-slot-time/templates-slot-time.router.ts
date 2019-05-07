import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootTemplatesSlotTimeComponent } from './components/root-templates-slot-time/root-templates-slot-time.component';

const ROUTES: Routes = [{
  path: 'templates-slot-time',
  component: RootTemplatesSlotTimeComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class TemplatesSlotTimeRouter { }
