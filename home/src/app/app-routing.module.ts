import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { HistoryComponent } from './history/history.component';
import { VideopageComponent } from './videopage/videopage.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'home',component: HomeComponent},
  { path: 'information',component: InformationComponent},
  { path: 'history',component: HistoryComponent},
  { path: 'video',component: VideopageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
