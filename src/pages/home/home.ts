import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Splash } from '../splash/splash';
import { Signup } from '../signup/signup';
import { Cards } from '../cards/cards';
import { Card } from '../card/card';
import { Loading } from '../loading/loading';
import { Nosignal } from '../nosignal/nosignal';
import { Search } from '../search/search';
import { Sidemenu } from '../sidemenu/sidemenu';
import { Profile } from '../profile/profile';
import { Chatbot } from '../chatbot/chatbot';
import { Map } from '../map/map';
import { Dashboard } from '../dashboard/dashboard';
import { Trips } from '../trips/trips';
import { Review } from '../review/review';
import { Feedback } from '../feedback/feedback';
import { Trip } from '../trip/trip';


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
  noSignalPage = Nosignal;
  searchPage = Search;
  menuPage = Sidemenu;
  profilePage = Profile;
  chatbotPage = Chatbot;
  mapPage = Map;
  dashboardPage = Dashboard;
  tripsPage = Trips;
  reviewPage = Review;
  feedbackPage = Feedback;
  tripPage = Trip;


  constructor(public navCtrl: NavController) {
  }

ngOnInit(){
  this.navCtrl.push(Trip);
}



}
