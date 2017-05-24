import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sidemenu } from './sidemenu';

@NgModule({
  declarations: [
    Sidemenu,
  ],
  imports: [
    IonicPageModule.forChild(Sidemenu),
  ],
  exports: [
    Sidemenu
  ]
})
export class SidemenuModule {}
