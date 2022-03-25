import { Injectable } from '@angular/core';
import { OnInit } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{

  pendingOrderCount: any;
  totalOrderCount: any;

  month: any;
  year: any;

  constructor() {
    let today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
  }

  ngOnInit() {
  }


}
