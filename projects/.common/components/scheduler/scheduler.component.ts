import { Component, OnInit, Input } from '@angular/core';
import { SchedulerEvent, CreateFormGroupArgs } from '@progress/kendo-angular-scheduler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EditEventsService } from './../../services/edit-events.service';
import { ManageEventsService } from '../../services/manage-events.service';

@Component({
  selector: 'fg-scheduler',
  templateUrl: 'scheduler.component.html'
})
export class SchedulerComponent {
  @Input() pageTitle: string;
  @Input() selectedDate = new Date();
  @Input() selectViewIndex = 0;
  formGroup: FormGroup;
  get events(): Array<SchedulerEvent> {
    return this._manageEvents.events;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _manageEvents: ManageEventsService,
    public editEvents: EditEventsService
  ) {
    this.createFormGroup = this.createFormGroup.bind(this);
  }

  createFormGroup(args: CreateFormGroupArgs): FormGroup {
    const dataItem = args.dataItem;
    this.formGroup = this._formBuilder.group({
      id: args.isNew ? this.getNextId() : dataItem.id,
      start: [dataItem.start, Validators.required],
      end: [dataItem.end, Validators.required],
      startTimezone: [dataItem.startTimezone],
      endTimezone: [dataItem.endTimezone],
      isAllDay: dataItem.isAllDay,
      title: [dataItem.title, Validators.required],
      description: dataItem.description,
      recurrenceRule: dataItem.recurrenceRule,
      recurrenceId: dataItem.recurrenceId
    });
    return this.formGroup;
  }
  getNextId(): number {
    const len = this.events.length;
    return (len === 0) ? 1 : this.events[this.events.length - 1].id + 1;
  }
}
