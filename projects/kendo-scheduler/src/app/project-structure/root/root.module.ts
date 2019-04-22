import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../../../../../.common/material.module';
import { RootComponent } from './components/root/root.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { SelectComponent } from './components/select/select.component';
import { EditEventsService } from './services/edit-events.service';
import { ManageEventsService } from './services/manage-events.service';
import { LoadExternalDataService } from './services/load-external-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RootComponent,
    SchedulerComponent,
    SelectComponent
  ],
  imports: [
    HttpClientModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    SchedulerModule
  ],
  providers: [
    EditEventsService,
    ManageEventsService,
    LoadExternalDataService
  ],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
