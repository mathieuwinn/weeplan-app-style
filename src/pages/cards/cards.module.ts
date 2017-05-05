import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cards } from './cards';
import { CardsPopover } from './cards';

@NgModule({
  declarations: [
    Cards,
    CardsPopover
  ],
  imports: [
    IonicPageModule.forChild(Cards),
  ],
  exports: [
    Cards,
    CardsPopover
  ]
})
export class CardsModule {}
