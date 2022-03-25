import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_helper/auth/auth.service';
import { ApiService } from '../_helper/api/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  retailer:any=[];
  name="";
  email="";
  userId="";
  mobileNo="";
  gender="";
  birthDate="";
  aadharCard="";
  address="";
  city="";
  state="";
  targetInKg="";
  incentive="";

  constructor(public authS: AuthService,public apiS:ApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.apiS.getSingleRetailerMasterByUser(this.authS.currentUserValue.id).subscribe(data=>{
      this.retailer = data.data[0];
      this.name = data.data[0].firmName;
      this.email = data.data[0].userData[0].email;
      this.userId = data.data[0].userData[0].userId;
      this.mobileNo = data.data[0].userData[0].mobileNo;
      this.gender = data.data[0].userData[0].gender;
      this.birthDate = data.data[0].userData[0].birthDate;
      this.aadharCard = data.data[0].userData[0].aadharCard;
      this.address = data.data[0].userData[0].address;
      this.city = data.data[0].userData[0].city;
      this.state =data.data[0].userData[0].state;
      this.targetInKg = data.data[0].targetInKg;
      this.incentive = data.data[0].incentive;
    })
  }

}
