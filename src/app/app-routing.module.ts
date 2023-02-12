import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard/dashboard.component';
import { DetailsComponent } from './componentes/details/details/details.component';

const routes: Routes = [
  { path: '', component:	DashboardComponent },
  { path: 'details', component:	DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
