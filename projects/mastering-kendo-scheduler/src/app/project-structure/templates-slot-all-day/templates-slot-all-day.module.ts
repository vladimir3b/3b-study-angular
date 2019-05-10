import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModulesModule } from './../../../../../.common/modules/common-modules.module';
import { RootTemplatesSlotAllDayComponent } from './components/root-templates-slot-all-day/root-templates-slot-all-day.component';

@NgModule({
  declarations: [
    RootTemplatesSlotAllDayComponent
  ],
  imports: [
    CommonModule,
    CommonModulesModule
  ]
})
export class TemplatesSlotAllDayModule { }
