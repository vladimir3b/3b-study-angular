import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// tslint:disable-next-line:max-line-length
import { RootTemplatesHeaderMinorTimeComponent } from './components/root-templates-header-minor-time/root-templates-header-minor-time.component';

const ROUTES: Routes = [{
  path: 'templates-header-minor-time',
  component: RootTemplatesHeaderMinorTimeComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class TemplatesHeaderMinorTimeRouter { }
