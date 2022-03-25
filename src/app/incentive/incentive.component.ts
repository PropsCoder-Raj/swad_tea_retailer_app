import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import * as $ from "jquery";

@Component({
  selector: 'app-incentive',
  templateUrl: './incentive.component.html',
  styleUrls: ['./incentive.component.scss'],
})
export class IncentiveComponent implements OnInit {

  constructor() {
    $(document).ready(function () {
      var xValues = ["Previous", "Current"];
      var yValues = [115, 79];
      var barColors = [
        "#633CAE",
        "#633CAE"
      ];

      new Chart("barChart", {
        type: "bar",
        data: {
          labels: xValues,
          datasets: [{
            label:"Month",
            backgroundColor: barColors,
            data: yValues,
            borderColor: [
              '#12076C',
              '#12076C'
            ],
            
            borderWidth: 1,
            barThickness:40,
          }]
        },
        options: {
          scales: {
            y: {
              display:true,
              
              grid:{
                display:false
              },
              ticks:{
              display:false
              },
              beginAtZero: true,
            },
            x: {
              display:true,
              grid:{
                display:false,
              },
              ticks:{
                color:"white",
                stepSize: 10,
              },
              beginAtZero: true,
            },
          },
          plugins:{
           legend:{ 
             display:false
           }
          },
          responsive: false,
          maintainAspectRatio: false,
          // title: {
          //   display: true,
          //   text: "World Wide Wine Production 2018"
          // }
        }
      });
    });
   }

  ngOnInit() {}

}
