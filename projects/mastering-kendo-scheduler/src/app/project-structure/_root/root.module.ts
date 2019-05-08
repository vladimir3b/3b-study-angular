import { NgModule } from '@angular/core';

import { CommonModulesModule } from './../../../../../.common/common-modules.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RootRouter } from './root.router';
import { RootComponent } from './components/root/root.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BasicExampleModule } from './../basic_example/basic-example.module';
import { TemplatesEventRenderingModule } from '../templates-event-rendering/templates-event-rendering.module';
import { TemplatesEventAllDayModule } from './../templates-event-all-day/templates-event-all-day.module';
import { TemplatesAgendaDatesModule } from '../templates-agenda-dates/templates-agenda-dates.module';
import { TemplatesAgendaTimesModule } from '../templates-agenda-times/templates-agenda-times.module';
import { TemplatesHeaderDateModule } from '../templates-header-date/templates-header-date.module';
import { TemplatesHeaderGroupModule } from '../templates-header-group/templates-header-group.module';
import { TemplatesSlotTimeModule } from '../templates-slot-time/templates-slot-time.module';
import { TemplatesSlotMonthModule } from '../templates-slot-month/templates-slot-month.module';
import { TemplatesSlotAllDayModule } from '../templates-slot-all-day/templates-slot-all-day.module';
import { TemplatesHeaderMinorTimeModule } from '../templates-header-minor-time/templates-header-minor-time.module';
import { TemplatesHeaderMajorTimeModule } from '../templates-header-major-time/templates-header-major-time.module';
import { EditEventsService } from 'projects/.common/services/edit-events.service';
import { ManageEventsService } from 'projects/.common/services/manage-events.service';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavigationComponent,
    PageNotFoundComponent,
    RootComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModulesModule,
    RootRouter,
    BasicExampleModule,
    TemplatesAgendaDatesModule,
    TemplatesAgendaTimesModule,
    TemplatesEventAllDayModule,
    TemplatesEventRenderingModule,
    TemplatesHeaderDateModule,
    TemplatesHeaderGroupModule,
    TemplatesHeaderMajorTimeModule,
    TemplatesHeaderMinorTimeModule,
    TemplatesSlotAllDayModule,
    TemplatesSlotMonthModule,
    TemplatesSlotTimeModule
  ],
  providers: [
    EditEventsService,
    ManageEventsService,
  ],
  bootstrap: [ RootComponent ]
})
export class RootModule { }
