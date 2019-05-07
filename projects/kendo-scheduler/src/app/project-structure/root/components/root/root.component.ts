import { LoadExternalDataService } from './../../services/load-external-data.service';
import { ManageEventsService } from '../../../../../../../.common/services/manage-events.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { Subscription, interval } from 'rxjs';
import { takeUntil, filter } from 'rxjs/Operators';
import { random } from 'lodash';

@Component({
  selector: 'fg-root',
  templateUrl: './root.component.html',
  styles: [`
    button {
      margin-left: 1rem;
    }
  `]
})
export class RootComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];
  selectedDate: Date = new Date();

  constructor(
      private _manageEvents: ManageEventsService,
      private _loadExternalData: LoadExternalDataService
  ) {}

  ngOnInit() {
    this._manageEvents.initializeEvens();
    this._subscriptions.push(this._loadExternalData.getHobbies().subscribe(
      events => {
        const intervalToShowEvents = 75;
        const stop = interval(intervalToShowEvents).pipe(filter(value => value >= events.length));
        interval(intervalToShowEvents)
        .pipe(takeUntil(stop))
        .subscribe(value => {
          if (random(100) % 2 === 1) {
            this._manageEvents.addEvent(events[value]);
          }
        });
      }
    ));
  }
  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onReceivedDate(date: Date): void {
    this.selectedDate = date;
  }
  updateEvents(events: Array<SchedulerEvent>) {
    // console.log([0].length);
    if (events.length) {
      console.log('New List of Events:');
      events.forEach(event => console.log(event.title));
    } else {
      console.log('There is no event...');
    }
  }
}
