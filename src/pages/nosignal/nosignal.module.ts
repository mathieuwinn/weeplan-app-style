import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Nosignal } from './nosignal';

@NgModule({
  declarations: [
    Nosignal,
  ],
  imports: [
    IonicPageModule.forChild(Nosignal),
  ],
  exports: [
    Nosignal
  ]
})
export class NosignalModule {}
