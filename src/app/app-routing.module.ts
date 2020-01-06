import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelpageComponent } from "./travelpage/travelpage.component";
import { HomepageComponent } from "./homepage/homepage.component";
import {AddtravelpageComponent  } from "./addtravelpage/addtravelpage.component";
import { UpdatetravelpageComponent } from "./updatetravelpage/updatetravelpage.component";
import { AddservicepageComponent } from "./addservicepage/addservicepage.component";
import { ServicepageComponent } from "./servicepage/servicepage.component";
import { UpdateservicepageComponent } from "./updateservicepage/updateservicepage.component";
import { HomeservicepagesComponent } from "./homeservicepages/homeservicepages.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'homeservice', component: HomeservicepagesComponent },
  { path: 'travelpage/:id', component: TravelpageComponent },
  { path: 'servicepage/:id', component: ServicepageComponent },
  { path: 'addnewtravelpage', component: AddtravelpageComponent },
  { path: 'addnewservicepage', component: AddservicepageComponent },
  { path: 'updatetravelpage/:id', component: UpdatetravelpageComponent },
  { path: 'updateservicepage/:id', component: UpdateservicepageComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
