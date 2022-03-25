import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DrawervComponent } from './drawerv/drawerv.component';
import { DrawerComponent } from './drawer/drawer.component';



@NgModule({
  declarations: [DrawervComponent,DrawerComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[
    DrawervComponent,
    DrawerComponent
  ]
})
export class ComponentsModule { }
