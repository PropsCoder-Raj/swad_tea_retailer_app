import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_helper/auth/auth.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'orders',
        loadChildren: () => import('../orders/orders.module').then( m => m.OrdersPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ],
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
