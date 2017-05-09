import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Splash } from '../splash/splash';
import { Signup } from '../signup/signup';
import { Cards } from '../cards/cards';
import { Card } from '../card/card';
import { Loading } from '../loading/loading';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splashPage = Splash;
  signupPage = Signup;
  cardsPage = Cards;
  cardPage = Card;
  loadingPage = Loading;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
   this.navCtrl.push(Loading);
  }
}
