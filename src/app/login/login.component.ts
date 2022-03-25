import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { AuthService } from '../_helper/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email:any = '';
  password = '';
  loader = false;
  returnUrl = "/dashboard";
  rememberMe = true;

  constructor( public router: Router, public toastC: ToastController, public authS: AuthService) { }

  ngOnInit() {
    if(localStorage.getItem("credential") != "" && localStorage.getItem("credential") != undefined){
      this.email = localStorage.getItem("credential");
    }
  }

  login(){
    this.loader = true;
    if(this.email !== '' && this.password !== ''){
        this.authS.userSignIn(this.email, this.password).pipe(first()).subscribe(data => {
            this.loader = false;
            if(this.rememberMe){
              localStorage.removeItem("remember");
              localStorage.removeItem("credential");
              localStorage.setItem("remember","true");
              localStorage.setItem("credential",this.email);
            }        
            window.location.replace(this.returnUrl);
        },
        error => {
          if(error.status == "0"){
            this.presentToast("danger",error.statusText);
          } else {
            this.presentToast("danger",error);
          }
          console.log(error);
          this.loader = false;
        });
    }else{
      this.loader = false;
      this.presentToast("danger","Please! Enter email & password.");
    }
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
