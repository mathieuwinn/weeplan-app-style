import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController, ViewController } from 'ionic-angular';
import { Filtersmodal } from '../filtersmodal/filtersmodal';

/**
 * Generated class for the Cards page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()


@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})

export class Cards {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public modalCtrl: ModalController) {
  }


  openModal() {
      let myModal = this.modalCtrl.create(Filtersmodal);
      myModal.present();
    }

  highlightedDiv: number;

  toggleHighlight(newValue: number) {
    if (this.highlightedDiv === newValue) {
      this.highlightedDiv = 0;
    }
    else {
      this.highlightedDiv = newValue;
    }
  }

  active = false;
    toggle() {
     this.active = !this.active;
    }

    ngOnInit(){
     this.openModal();
   }




}
