import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../../../../.common/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RootRouter } from './root.router';
import { RootComponent } from './components/root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TemplatesEventRenderingModule } from '../templates-event-rendering/templates-event-rendering.module';
import { TemplatesEventAllDayModule } from './../templates-event-all-day/templates-event-all-day.module';

@NgModule({
  declarations: [
    NavigationComponent,
    PageNotFoundComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RootRouter,
    TemplatesEventRenderingModule,
    TemplatesEventAllDayModule
  ],
  providers: [],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
