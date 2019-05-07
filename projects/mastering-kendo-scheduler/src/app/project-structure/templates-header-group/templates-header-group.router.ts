import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootTemplatesHeaderGroupComponent } from './components/root-templates-header-group/root-templates-header-group.component';

const ROUTES: Routes = [{
  path: 'templates-header-group',
  component: RootTemplatesHeaderGroupComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class TemplatesHeaderGroupRouter { }
