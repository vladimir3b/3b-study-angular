import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModulesModule } from '../../../../../.common/modules/common-modules.module';
import { RootTemplatesEventRenderingComponent } from './components/root-templates-event-rendering/root-templates-event-rendering.component';


@NgModule({
  declarations: [
    RootTemplatesEventRenderingComponent,

  ],
  imports: [
    CommonModule,
    CommonModulesModule
  ]
})
export class TemplatesEventRenderingModule { }
