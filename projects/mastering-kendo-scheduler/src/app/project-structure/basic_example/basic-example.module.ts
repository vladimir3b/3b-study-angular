import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModulesModule } from '../../../../../.common/modules/common-modules.module';
import { RootBasicExampleComponent } from './components/root-basic-example/root-basic-example.component';

@NgModule({
  declarations: [
    RootBasicExampleComponent,
  ],
  imports: [
    CommonModule,
    CommonModulesModule
  ]
})
export class BasicExampleModule { }
