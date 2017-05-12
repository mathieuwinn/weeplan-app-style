import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Splash page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class Splash {
  show= false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Splash');

        setTimeout(() => {
            this.show = true;
        }, 2000);

  }


}
