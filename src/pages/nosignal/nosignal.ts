import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Nosignal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-nosignal',
  templateUrl: 'nosignal.html',
})
export class Nosignal {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nosignal');
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: "Pas de connexion",
      message: "Veuillez vérifier votre connexion internet.",
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            console.log('ok clicked');
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
