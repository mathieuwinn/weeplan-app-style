import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Review } from './review';

@NgModule({
  declarations: [
    Review,
  ],
  imports: [
    IonicPageModule.forChild(Review),
  ],
  exports: [
    Review
  ]
})
export class ReviewModule {}
