import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { Tripmodal } from '../tripmodal/tripmodal';


/**
 * Generated class for the Trips page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html',
})
export class Trips {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {


  }

  openModal() {
      let myModal = this.modalCtrl.create(Tripmodal, {
        useClass: 'IonicErrorHandler'
    });
      myModal.present();
    }


    ngOnInit(){
     this.openModal();
   }

}
