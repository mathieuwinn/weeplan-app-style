import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Splash } from '../splash/splash';
import { Signup } from '../signup/signup';
import { Cards } from '../cards/cards';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splashPage = Splash;
  signupPage = Signup;
  cardsPage = Cards;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    this.navCtrl.push(Cards);
  }
}
