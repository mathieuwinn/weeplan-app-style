import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Card page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class Card {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public cards = [
  { title: 'Danse classique à Pâques', img: "../assets/img/card-img-2.png" },
  { title: 'Salon du Livre', img: "../assets/img/card-img-3.png" },
  { title: 'La Foire du Trône', img: "../assets/img/card-img-5.png" },
  { title: 'Parc de la Villette', img: "../assets/img/card-img-6.png" },
  { title: 'Expo Street Émar', img: "../assets/img/card-img-7.png" }
];


    active = false;
      toggle() {
       this.active = !this.active;
      }




}
