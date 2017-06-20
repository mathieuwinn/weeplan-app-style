import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController} from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
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
show= false;

  ionViewDidLoad() {
      setTimeout(() => {
          this.show = true;
      }, 1000);
}
      presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
          title: 'Ajouter à un trip',
          buttons: [
            {
            text: 'Créer un trip',
            icon: 'add',
            handler: () => {
              console.log('Destructive clicked');
              }
            },{
            text: 'Escale à Rennes',
            handler: () => {
              console.log('Destructive clicked');
              }
            },{
            text: 'Weekend en amoureux ejhejrhe efjefjhe ',
              handler: () => {
                console.log('Archive clicked');
              }
            }
          ]
        });
        actionSheet.present();
      }




}
