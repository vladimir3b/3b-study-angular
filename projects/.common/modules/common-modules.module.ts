import { KendoModule } from './kendo.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

const COMMON_MODULES = [
  MaterialModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  KendoModule
]

@NgModule({
  imports: [
    ...COMMON_MODULES
  ],
  exports: [
    ...COMMON_MODULES
  ]
})
export class CommonModulesModule {}
