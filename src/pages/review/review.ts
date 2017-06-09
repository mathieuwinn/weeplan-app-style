import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Review page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class Review {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  show= false;

    ionViewDidLoad() {
        setTimeout(() => {
            this.show = true;
        }, 1000);
  }

}
