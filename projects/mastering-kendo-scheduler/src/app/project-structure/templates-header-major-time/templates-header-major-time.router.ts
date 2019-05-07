import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// tslint:disable-next-line:max-line-length
import { RootTemplatesHeaderMajorTimeComponent } from './components/root-templates-header-major-time/root-templates-header-major-time.component';

const ROUTES: Routes = [{
  path: 'templates-header-major-time',
  component: RootTemplatesHeaderMajorTimeComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class TemplatesHeaderMajorTimeRouter { }
