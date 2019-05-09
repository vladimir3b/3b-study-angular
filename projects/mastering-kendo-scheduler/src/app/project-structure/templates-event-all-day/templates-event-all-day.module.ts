import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModulesModule } from './../../../../../.common/modules/common-modules.module';
import { RootTemplatesEventAllDayComponent } from './components/root-templates-event-all-day/root-templates-event-all-day.component';

@NgModule({
  declarations: [
    RootTemplatesEventAllDayComponent
  ],
  imports: [
    CommonModule,
    CommonModulesModule
  ]
})
export class TemplatesEventAllDayModule { }
