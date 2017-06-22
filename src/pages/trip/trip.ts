import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, ActionSheetController} from 'ionic-angular';
import { Addtravellermodal } from '../addtravellermodal/addtravellermodal';

/**
 * Generated class for the Trip page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trip',
  templateUrl: 'trip.html',
})
export class Trip {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Trip');
  }

  openModal() {
      let myModal = this.modalCtrl.create(Addtravellermodal);
      myModal.present();
    }

  ngOnInit(){
//   this.openModal();
 }

 presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Danse classique à Pâques',
     buttons: [
       {
       text: 'Voir la fiche d’activité '
       },{
       text: 'Retirer l’activité de mon trip',
       cssClass: 'action-delete',
       handler: () => {
         console.log('Destructive clicked');
         }
       }
     ]
   });
   actionSheet.present();
 }



}

export class SegmentPage {
  tripPage: string = "activities";
     constructor() {
   }
}
