import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { ConfigPage } from '../pages/config/config';
//import { IntroPage } from '../pages/intro/intro';
import { MapPage } from '../pages/map/map'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = ConfigPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.hide();
    });
  }
}

