import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModulesModule } from 'projects/.common/modules/common-modules.module';
import { RootTemplatesSlotTimeComponent } from './components/root-templates-slot-time/root-templates-slot-time.component';


@NgModule({
  declarations: [
    RootTemplatesSlotTimeComponent
  ],
  imports: [
    CommonModule,
    CommonModulesModule
  ]
})
export class TemplatesSlotTimeModule { }
