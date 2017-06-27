import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tripmodal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tripmodal',
  templateUrl: 'tripmodal.html',
})
export class Tripmodal {

@ViewChild('focusInput') input;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tripmodal');
    setTimeout(() => {
      this.input.setFocus();
    },200);
  }


}
