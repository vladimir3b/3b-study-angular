import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModulesModule } from 'projects/.common/modules/common-modules.module';
import { RootTemplatesComponent } from './components/root-templates/root-templates.component';
import { EventRenderingComponent } from './components/event-rendering/event-rendering.component';
import { EventAllDayComponent } from './components/event-all-day/event-all-day.component';
import { SlotsAllDayComponent } from './components/slots-all-day/slots-all-day.component';
import { SlotsTimeComponent } from './components/slots-time/slots-time.component';
import { SlotsMonthComponent } from './components/slots-month/slots-month.component';
import { EventsRenderingComponent } from './components/events-rendering/events-rendering.component';
import { EventsAllDayComponent } from './components/events-all-day/events-all-day.component';

@NgModule({
  declarations: [
    RootTemplatesComponent,
    EventsRenderingComponent,
    EventsAllDayComponent,
    SlotsAllDayComponent,
    SlotsTimeComponent,
    SlotsMonthComponent
  ],
  imports: [
    CommonModule,
    CommonModulesModule
  ]
})
export class TemplatesModule { }
