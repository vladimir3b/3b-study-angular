import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

@Injectable({
  providedIn: 'root'
})
export class ManageEventsService {
  private _events: Array<SchedulerEvent>;
  get events(): Array<SchedulerEvent> {
    return cloneDeep(this._events);
  }

  private _eventById(id: string): number {
    return this.events.findIndex((event: SchedulerEvent) => event.id === id);
  }
  private _idAlreadyExists(id: string): boolean {
    return this._eventById(id) >= 0;
  }
  initializeEvens(): void {
    this._events = [];
  }
  addEvent(event: SchedulerEvent): void {
    if (!this._idAlreadyExists(event.id)) {
      console.log(event);
      this._events.push(event);
    }
  }
  updateEvent(eventId: string, newEvent: SchedulerEvent): void {
    if (this._idAlreadyExists(eventId)) {
      this._events[this._eventById(eventId)] = { ...newEvent };
    }
  }
  deleteEvent(id: string): void {
    if (this._idAlreadyExists(id)) {
      this._events.splice(this._eventById(id), 1);
    }
  }
  deleteAllEvents(): void {
    this._events = [];
  }
}
