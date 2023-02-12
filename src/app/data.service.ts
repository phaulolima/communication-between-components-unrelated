import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private eventSource = new BehaviorSubject(false);
  currentMessage = this.eventSource.asObservable();

  constructor() { }

  changeAction(doAction: boolean) {
    this.eventSource.next(doAction)
  }
}
