import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

interface IExternalEvent {
  eventId: string;
  userId: string;
  title: string;
  description: string;
  startingMoment: string;
  endingMoment: string;
  allDayEvent: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoadExternalDataService {

  public constructor(private _httpClient: HttpClient) { }

  public getHobbies(): Observable<Array<SchedulerEvent>> {
    return this._httpClient.get('/assets/data/some-events.json').pipe(
      map((data: Array<IExternalEvent>) => data.map(event => {
        return {
          id: event.eventId,
          userId: event.userId,
          title: event.title,
          start: new Date(event.startingMoment),
          end: event.endingMoment ? new Date(event.endingMoment) : new Date(event.startingMoment),
          description: event.description,
          isAllDay: event.allDayEvent
        } ;
      }))
    );
  }
}
