import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IncentiveComponent } from './incentive/incentive.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helper/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'incentive',
    component: IncentiveComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
