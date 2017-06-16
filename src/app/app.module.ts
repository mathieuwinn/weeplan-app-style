import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Splash } from '../pages/splash/splash';
import { Signup } from '../pages/signup/signup';
import { Cards } from '../pages/cards/cards';
import { Card } from '../pages/card/card';
import { Loading } from '../pages/loading/loading';
import { Nosignal } from '../pages/nosignal/nosignal';
import { Search } from '../pages/search/search';
import { Sidemenu } from '../pages/sidemenu/sidemenu';
import { Profile } from '../pages/profile/profile';
import { Filtersmodal } from '../pages/filtersmodal/filtersmodal';
import { Chatbot } from '../pages/chatbot/chatbot';
import { Map } from '../pages/map/map';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Trips } from '../pages/trips/trips';
import { Tripmodal } from '../pages/tripmodal/tripmodal';
import { Review } from '../pages/review/review';
import { Feedback } from '../pages/feedback/feedback';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Splash,
    Signup,
    Cards,
    Card,
    Loading,
    Nosignal,
    Search,
    Sidemenu,
    Profile,
    Filtersmodal,
    Chatbot,
    Map,
    Dashboard,
    Trips,
    Tripmodal,
    Review,
    Feedback
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Splash,
    Signup,
    Cards,
    Card,
    Loading,
    Nosignal,
    Search,
    Sidemenu,
    Profile,
    Filtersmodal,
    Chatbot,
    Map,
    Dashboard,
    Trips,
    Tripmodal,
    Review,
    Feedback
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
