import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit, OnDestroy {
  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(doAction => this.message = doAction.toString());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.data.changeAction(true);
  }
}
