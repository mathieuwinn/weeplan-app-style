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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Splash,
    Signup,
    Cards,
    Card,
    Loading
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
    Loading
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
