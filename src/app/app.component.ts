import { Component, OnInit } from '@angular/core';
import { DataService } from './_helper/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public dataS: DataService) {}
  ngOnInit(){}
}
