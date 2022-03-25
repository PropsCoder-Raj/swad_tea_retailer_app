import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/_helper/api/api.service';
import { AuthService } from 'src/app/_helper/auth/auth.service';
import { DataService } from 'src/app/_helper/data/data.service';

@Component({
  selector: 'app-drawerv',
  templateUrl: './drawerv.component.html',
  styleUrls: ['./drawerv.component.scss'],
})
export class DrawervComponent implements OnInit {
  isOpen = false;
  openHeight = 0;
  productDetails: any = [];
  month ="";
  year="";
  ratingCount = 0;
  rating = 0;
  data:any=[];
  @ViewChild('drawer',{read:ElementRef}) drawer:ElementRef;
  @Output('openStateChanged') openState: EventEmitter<boolean> = new EventEmitter();

  constructor(public platform: Platform, public apiS: ApiService, public router:Router, public authS: AuthService, public dataS: DataService) { }

  ngOnInit() {
  }

  applyfilter(){
    
    this.dataS.month = Number(this.month) - 1;
    this.dataS.year = this.year;
    
    this.apiS.getSingleRetailerMasterByUser(this.authS.currentUserValue.id).subscribe(data => {
      this.apiS.getAllDashboardsByRetailer(data.data[0]._id, this.dataS.month, this.dataS.year).subscribe(data => {
        console.log(data);
        this.dataS.pendingOrderCount = data.pendingOrderCount;
        this.dataS.totalOrderCount = data.allOrderCount;
      });
    });    
    this.toggleDrawer();
  }

  clear(){
    this.month = '';
    this.year = '';
  }
  
  toggleDrawer(){

    this.openHeight = (this.platform.height()/100) * 10;
    const drawer = this.drawer.nativeElement;
    this.openState.emit(!this.isOpen);

    if(!this.isOpen){
      drawer.style.visibility = 'visible';
      drawer.style.transition = '.4s ease-in';
      drawer.style.transform = `translateY(${-this.openHeight}px)`;
      this.isOpen = true;
    }else{
      this.ratingCount = 0;
      this.rating = 0;
      drawer.style.visibility = 'hidden';
      drawer.style.transition = '.4s ease-out';
      drawer.style.transform = '';
      this.isOpen = false;
    }
  }
}
