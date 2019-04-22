import { LoadExternalDataService } from './../../services/load-external-data.service';
import { ManageEventsService } from './../../services/manage-events.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { Subscription } from 'rxjs';

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
      events => setTimeout( () => events.forEach(event => this._manageEvents.addEvent(event), 100000))
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
