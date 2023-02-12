import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
  message!: string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(doAction => {
      if (doAction)
      {
        this.alerta();
      } 
    });
  }

  alerta() {
    this.message = "Realizando ação!";
    alert("Realizando ação!");
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
