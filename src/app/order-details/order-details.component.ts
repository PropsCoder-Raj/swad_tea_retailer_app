import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ApiService } from '../_helper/api/api.service';
import { AuthService } from '../_helper/auth/auth.service';
import { ExternalLibraryService } from './util';
declare var Razorpay: any;

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {

  
  response: any;
  razorpayResponse: any;
  showModal = false;
  paymentId = '';
  paymentRazorpayStatus = false;
  
  name = '';
  mobile = '';
  email = '';

  RAZORPAY_OPTIONS: any = {
    key: environment.testKeyId,
    amount: '',
    name: '',
    order_id: '',
    description: 'Products',
    prefill: {
      name: '',
      email: '',
      contact: '',
      method: ''
    },
    modal: {},
    theme: {
      color: '#12076C'
    }
  };

  orderId:any="";
  items:any=[];
  subtotal :any="";
  commission:any="";
  cgst:any="";
  sgst:any="";
  paymentStatus="";
  status="";
  total:any="";
  loader = false;
  constructor(public authS: AuthService, public apiS:ApiService,public route:ActivatedRoute,public toastC:ToastController, public cd: ChangeDetectorRef, private razorpayService: ExternalLibraryService, public router: Router) {
    this.route.params.subscribe(data=>{
      this.orderId = data.id;
    })
  }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.apiS.getSingleRetailerMasterByUser(this.authS.currentUserValue.id).subscribe(data=>{
      this.name = data.data[0].firmName;
      this.email = data.data[0].userData[0].email;
      this.mobile = data.data[0].userData[0].mobileNo;
    });  
    this.apiS.getSingleOrder(this.orderId).subscribe(data=>{
      this.paymentStatus = data.data[0].paymentStatus;
      this.status = data.data[0].status;
      this.items = data.data[0].items;
      this.subtotal = data.data[0].subTotal;
      this.commission = data.data[0].commission;
      this.cgst = data.data[0].cgst;
      this.sgst = data.data[0].sgst;
      this.total = Math.round(data.data[0].totalAmount);
    })
  }

  payment(){
    this.loader = true;
    this.razorPay();
  }

  razorPay() {
    this.RAZORPAY_OPTIONS.amount = Number(this.total) + '00';
    this.RAZORPAY_OPTIONS.prefill.name = this.name;
    this.RAZORPAY_OPTIONS.prefill.email = this.email;
    this.RAZORPAY_OPTIONS.prefill.contact = this.mobile;
    this.RAZORPAY_OPTIONS.modal = {
      "ondismiss": function(){
        document.getElementById("closeForm").click();
      }
    };
    this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);
    // this.showPopup();
    console.log(this.RAZORPAY_OPTIONS);
    let razorpay = new Razorpay(this.RAZORPAY_OPTIONS);
    razorpay.open();
  }
  

  public razorPaySuccessHandler(response: any) {
    this.razorpayResponse = `Razorpay Response`;
    this.showModal = true;
    this.cd.detectChanges();
    if (response.razorpay_payment_id !== '') {
      this.paymentId = response.razorpay_payment_id
      this.paymentSuccess(this.orderId, this.paymentId);
    } else{
      this.loader = false;
    }
  }
  
  paymentSuccess(orderId, paymentId){
    this.apiS.paymentSuccess(orderId, paymentId).subscribe(data=>{
      if(data.status == 'success'){
          this.presentToast("success","Order Confirmed");
          setTimeout(() =>{
            this.loader = false;
            this.router.navigate(['/orders']);
          }, 1500);
      }else{
        this.presentToast("error",data.message);
      }
    })
  }
  
  async presentToast(color,message) {
    const toast = await this.toastC.create({
      color:color,
      duration: 2000,
      message: message
    });

    await toast.present();
  }
}
