import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Filtersmodal } from './filtersmodal';

@NgModule({
  declarations: [
    Filtersmodal,
  ],
  imports: [
    IonicPageModule.forChild(Filtersmodal),
  ],
  exports: [
    Filtersmodal
  ]
})
export class FiltersmodalModule {}
