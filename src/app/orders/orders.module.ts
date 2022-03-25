import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersPageRoutingModule } from './orders-routing.module';

import { OrdersPage } from './orders.page';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersPageRoutingModule,
    FormsModule,
    IonicModule
  ],
  declarations: [OrdersPage,OrderDetailsComponent]
})
export class OrdersPageModule {}
