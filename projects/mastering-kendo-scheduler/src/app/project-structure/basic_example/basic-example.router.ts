import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RootBasicExampleComponent } from './components/root-basic-example/root-basic-example.component';

const ROUTES: Routes = [{
  path: 'basic-example',
  component: RootBasicExampleComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class BasicExampleRouter { }
