import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Loading page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class Loading {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Loading');
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      message: "Weeplan aimerait utiliser votre position actuelle pour vous proposer des activités autour.",
      buttons: [
        {
          text: 'Refuser',
          handler: data => {
            console.log('refuser clicked');
          }
        },
        {
          text: 'Autoriser',
          handler: data => {
            console.log('autoriser clicked');
          }
        }
      ]
    });
    prompt.present();
  }


  ngOnInit() {
   this.showPrompt();
  }

}
