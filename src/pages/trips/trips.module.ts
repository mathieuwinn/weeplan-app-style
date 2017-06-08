import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Trips } from './trips';

@NgModule({
  declarations: [
    Trips,
  ],
  imports: [
    IonicPageModule.forChild(Trips),
  ],
  exports: [
    Trips
  ]
})
export class TripsModule {}
