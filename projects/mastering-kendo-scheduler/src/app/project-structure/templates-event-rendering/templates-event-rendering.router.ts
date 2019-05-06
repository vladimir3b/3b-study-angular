import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootTemplatesEventRenderingComponent } from './components/root-templates-event-rendering/root-templates-event-rendering.component';

const ROUTES: Routes = [{
  path: 'templates-event-rendering',
  component: RootTemplatesEventRenderingComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class TemplatesEventRenderingRouter { }
