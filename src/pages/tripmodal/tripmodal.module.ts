import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tripmodal } from './tripmodal';

@NgModule({
  declarations: [
    Tripmodal,
  ],
  imports: [
    IonicPageModule.forChild(Tripmodal),
  ],
  exports: [
    Tripmodal
  ]
})
export class TripmodalModule {}
