import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppComponent } from '../app.component';
import { AccountService } from '../core/account.service';
import { MenuService } from '../core/menu.service'
 
import {
  HomeComponent
} from '../features/features.module';


 
const routes: Routes = [
  

  {
    path: '',
    component: HomeComponent,

  },
  
  
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
  providers: []
})
export class RouteRoutingModule { }
