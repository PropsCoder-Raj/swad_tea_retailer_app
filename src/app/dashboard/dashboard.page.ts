import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Chart } from 'chart.js';
import * as $ from "jquery";
import { ApiService } from '../_helper/api/api.service';
import { AuthService } from '../_helper/auth/auth.service';
import { DataService } from '../_helper/data/data.service';
import { UserService } from '../_helper/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage implements OnInit {

  retailersRoleId = '';
  orders: any = [];

  pendingOrderCount = 0;
  totalOrderCount = 0;
  kg = true;
  pkt = false;
  brand = false;
  backdropVisible = false;

  kgChart: Chart;
  pktChart: Chart;

  constructor(public dataS: DataService, public authS: AuthService, public apiS: ApiService, public toastC: ToastController, public route: ActivatedRoute) {
  }


  getKg() {
    this.kg = true;
    this.pkt = false;
    this.brand = false;
    this.apiS.getSingleRetailerMasterByUser(this.authS.currentUserValue.id).subscribe(data => {
      this.apiS.getAllDashboardsByRetailer(data.data[0]._id, this.dataS.month, this.dataS.year).subscribe(data => {
        $(document).ready(function () {
          var xValues = ["25 g", "50 g", "100 g", "250 g", "500 g", "1 kg", "5 kg"];
          var yValues = [data.kg[0].size25g, data.kg[0].size50g, data.kg[0].size100g, data.kg[0].size250g, data.kg[0].size500g, data.kg[0].size1kg, data.kg[0].size5kg];
          var barColors = [
            "#633CAE",
            "#F1F3F9",
            "#54D8FE",
            "#FF6C6C",
            "#FFC26C",
            "#39CCCC",
            "#FF851B"
          ];

          let kgChart = new Chart("kgChart", {
            type: "doughnut",
            data: {
              labels: xValues,
              datasets: [{
                backgroundColor: barColors,
                data: yValues,
                borderColor: "#12076C",

              }]
            },
            options: {
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    padding: 20,
                    boxWidth: 8,
                    color: "white",
                    usePointStyle: true,
                    pointStyle: "circle"
                  }
                }
              },
              responsive: false,
              maintainAspectRatio: false
            }
          });

          $("#clearkgChart").click(function(){
            kgChart.destroy();
          });
        });
      });  
    })
  }

  getPkt() {
    this.pkt = true;
    this.kg = false;
    this.brand = false;
    this.apiS.getSingleRetailerMasterByUser(this.authS.currentUserValue.id).subscribe(data => {
      this.apiS.getAllDashboardsByRetailer(data.data[0]._id, this.dataS.month, this.dataS.year).subscribe(data => {
        $(document).ready(function () {
          var xValues = ["5 Pkts", "10 Pkts", "50 Pkts", "100 Pkts", "250 Pkts", "500 Pkts", "750 Pkts"];
          var yValues = [data.pkt[0].size5pkt, data.pkt[0].size10pkt, data.pkt[0].size50pkt, data.pkt[0].size100pkt, data.pkt[0].size250pkt, data.pkt[0].size500pkt, data.pkt[0].size750pkt];
          var barColors = [
            "#633CAE",
            "#F1F3F9",
            "#54D8FE",
            "#FF6C6C",
            "#FFC26C",
            "#39CCCC",
            "#FF851B"
          ];

          this.pktChart = new Chart("pktChart", {
            type: "doughnut",
            data: {
              labels: xValues,
              datasets: [{
                backgroundColor: barColors,
                data: yValues,
                borderColor: "#12076C",

              }]
            },
            options: {
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    padding: 20,
                    boxWidth: 8,
                    color: "white",
                    usePointStyle: true,
                    pointStyle: "circle"
                  }
                }
              },
              responsive: false,
              maintainAspectRatio: false
            }
          });
        });
      });  
    })
  }

  getBrand(){
    this.pkt = false;
    this.kg = false;
    this.brand = true;
    this.apiS.getSingleRetailerMasterByUser(this.authS.currentUserValue.id).subscribe(data => {
      this.apiS.getAllDashboardsByRetailer(data.data[0]._id, this.dataS.month, this.dataS.year).subscribe(data => {
        $(document).ready(function () {
          var xValues = ["Dust", "Leaf", "Elaichi"];
          var yValues = [data.brand[0].sizeBrand1, data.brand[0].sizeBrand2, data.brand[0].sizeBrand3];
          var barColors = [
            "#FFC26C",
            "#F1F3F9",
            "#39CCCC"
          ];

          new Chart("brandChart", {
            type: "doughnut",
            data: {
              labels: xValues,
              datasets: [{
                backgroundColor: barColors,
                data: yValues,
                borderColor: "#12076C",

              }]
            },
            options: {
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    padding: 20,
                    boxWidth: 8,
                    color: "white",
                    usePointStyle: true,
                    pointStyle: "circle"
                  }
                }
              },
              responsive: false,
              maintainAspectRatio: false
            }
          });
        });
      })
    });  
  }

  ngOnInit() {
    this.apiS.getAllRole().subscribe(data => {
      data.data.forEach((element: any) => {
        if (element.name === 'retailers') {
          this.retailersRoleId = element['_id'];
        }

        this.checkAuth();
      });
    });
  }

  ionViewWillEnter() {
    this.getDataByRetailer();
  }

  getDataByRetailer() {
    this.orders = [];
    this.apiS.getSingleRetailerMasterByUser(this.authS.currentUserValue.id).subscribe(data => {
      this.apiS.getAllDashboardsByRetailer(data.data[0]._id, this.dataS.month, this.dataS.year).subscribe(data => {
        console.log(data);
        this.dataS.pendingOrderCount = data.pendingOrderCount;
        this.dataS.totalOrderCount = data.allOrderCount;
        $(document).ready(function () {
          var xValues = ["25 g", "50 g", "100 g", "250 g", "500 g", "1 kg", "5 kg"];
          var yValues = [data.kg[0].size25g, data.kg[0].size50g, data.kg[0].size100g, data.kg[0].size250g, data.kg[0].size500g, data.kg[0].size1kg, data.kg[0].size5kg];
          var barColors = [
            "#633CAE",
            "#F1F3F9",
            "#54D8FE",
            "#FF6C6C",
            "#FFC26C",
            "#39CCCC",
            "#FF851B"
          ];

          let kgChart = new Chart("kgChart", {
            type: "doughnut",
            data: {
              labels: xValues,
              datasets: [{
                backgroundColor: barColors,
                data: yValues,
                borderColor: "#12076C",

              }]
            },
            options: {
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    padding: 20,
                    boxWidth: 8,
                    color: "white",
                    usePointStyle: true,
                    pointStyle: "circle"
                  }
                }
              },
              responsive: false,
              maintainAspectRatio: false
            }
          });

          $("#clearkgChart").click(function(){
            kgChart.destroy();
          });
        });
      });
      this.apiS.getAllPaymentPendingOrdersByRetailer(data.data[0]._id).subscribe(data => {
        this.orders = data.data;
      })
    });
  }

  applyFilter() {

  }

  clearFilter() {
    let today = new Date();
    this.dataS.month = today.getMonth();
    this.dataS.year = today.getFullYear();
    this.apiS.getSingleRetailerMasterByUser(this.authS.currentUserValue.id).subscribe(data => {
      this.apiS.getAllDashboardsByRetailer(data.data[0]._id, this.dataS.month, this.dataS.year).subscribe(data => {
        this.dataS.pendingOrderCount = data.pendingOrderCount;
        this.dataS.totalOrderCount = data.allOrderCount;
        $("#clearkgChart").click();
        setTimeout(() => {
          this.getKg();
        }, 500)
        document.getElementById('clearBtn').click();
      });
    });
  }

  checkAuth() {
    this.apiS.getSingleRetailerMasterByUser(this.authS.currentUserValue.id).subscribe(data => {
      if (data['data'].length === 0) {
        this.presentToast('danger', 'Only Retailer Access This App')
        setTimeout(() => {
          this.authS.logout();
        }, 1000);
      }
    });
  }

  async presentToast(color, message) {
    const toast = await this.toastC.create({
      color: color,
      duration: 2000,
      message: message
    });

    await toast.present();
  }

  toggleBackdrop(isVisible) {
    this.backdropVisible = isVisible;
    if (this.backdropVisible === false) {
      $("#clearkgChart").click();
      setTimeout(() => {
        this.getKg();
      }, 500)
    }
  }

}
