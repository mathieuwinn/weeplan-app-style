import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }


  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Mot de passe oublié',
      message: "Nous vous enverrons un email avec un lien pour remettre à jour votre mot de passe",
      inputs: [
        {
          name: 'email',
          placeholder: 'Votre email'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
        },
        {
          text: 'Envoyer',
        }
      ]
    });
    prompt.present();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Veuillez patienter...",
      duration: 3000
    });
    loader.present();
  }






}
