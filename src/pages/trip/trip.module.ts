import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Trip } from './trip';

@NgModule({
  declarations: [
    Trip,
  ],
  imports: [
    IonicPageModule.forChild(Trip),
  ],
  exports: [
    Trip
  ]
})
export class TripModule {}
