import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/_helper/api/api.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  isOpen = false;
  openHeight = 0;
  productDetails: any = [];
  offers:any=[];
  ratingCount = 0;
  rating = 0;
  applicableOffers=[];
  @ViewChild('drawer',{read:ElementRef}) drawer:ElementRef;
  @Output('openStateChanged') openState: EventEmitter<boolean> = new EventEmitter();

  constructor(public platform: Platform, public apiS: ApiService,public router:Router) { }

  ngOnInit() {
  }

  
  toggleDrawer(items){
    if(items !== undefined){
      this.offers = items;
    }
    
    this.openHeight = (this.platform.height()/100) * 40;
    const drawer = this.drawer.nativeElement;
    this.openState.emit(!this.isOpen);

    if(!this.isOpen){
      drawer.style.visibility = 'visible';
      drawer.style.transition = '.4s ease-in';
      drawer.style.transform = `translateY(${-this.openHeight}px)`;
      this.isOpen = true;
    }else{
      this.offers = [];
      drawer.style.visibility = 'hidden';
      drawer.style.transition = '.4s ease-out';
      drawer.style.transform = '';
      this.isOpen = false;
    }
    console.log(this.offers);
  }


  applyOffers(index){
    this.applicableOffers.push(index);
    this.router.navigate(['/orders/create'],{
      queryParams:{i:index}
    });
    this.toggleDrawer(this.offers);
  }
}
