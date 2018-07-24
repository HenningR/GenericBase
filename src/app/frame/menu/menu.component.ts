import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../../core/menu.service'
import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router,public menuServ: MenuService) {
  }

  ngOnInit() {
  }

  changeRoute(routeDesc,breadCrumbDesc) {
    let tempStr: string = "";
    tempStr = routeDesc;
    this.change.emit(tempStr.toLowerCase().trim());
  }



}
