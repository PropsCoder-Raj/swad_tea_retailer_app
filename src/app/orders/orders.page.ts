import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../_helper/api/api.service';
import { AuthService } from '../_helper/auth/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  public addProduct = false;
  orders:any=[];
  retailerId="";
  retailerName="";

  constructor(public apiS:ApiService,public route:ActivatedRoute, public authS: AuthService) {
  }

  ionViewWillEnter(){
    this.getDataByRetailer();
  }

  ngOnInit() {
  }

  getDataByRetailer(){
    this.orders = [];
    this.apiS.getSingleRetailerMasterByUser(this.authS.currentUserValue.id).subscribe(data=>{
      this.apiS.getAllOrdersByRetailer(data.data[0]._id).subscribe(data=>{
        this.orders=data.data;
      })
    });  
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getDataByRetailer();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
