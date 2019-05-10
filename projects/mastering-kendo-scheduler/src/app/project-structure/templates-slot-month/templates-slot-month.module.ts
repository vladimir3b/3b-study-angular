import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootTemplatesSlotMonthComponent } from './components/root-templates-slot-month/root-templates-slot-month.component';
import { CommonModulesModule } from 'projects/.common/modules/common-modules.module';

@NgModule({
  declarations: [RootTemplatesSlotMonthComponent],
  imports: [
    CommonModule,
    CommonModulesModule
  ]
})
export class TemplatesSlotMonthModule { }
