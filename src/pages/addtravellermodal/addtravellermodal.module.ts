import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Addtravellermodal } from './addtravellermodal';

@NgModule({
  declarations: [
    Addtravellermodal,
  ],
  imports: [
    IonicPageModule.forChild(Addtravellermodal),
  ],
  exports: [
    Addtravellermodal
  ]
})
export class AddtravellermodalModule {}
