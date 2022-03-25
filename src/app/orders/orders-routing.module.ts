import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { AuthGuard } from '../_helper/auth/auth.guard';

import { OrdersPage } from './orders.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersPage
  },
  {
    path: 'details/:id',
    component: OrderDetailsComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersPageRoutingModule {}
