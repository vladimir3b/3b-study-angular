import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootTemplatesHeaderDateComponent } from './components/root-templates-header-date/root-templates-header-date.component';

const ROUTES: Routes = [{
  path: 'templates-header-date',
  component: RootTemplatesHeaderDateComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class TemplatesHeaderDateRouter { }
