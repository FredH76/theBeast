import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MapPage } from '../map/map';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  splash: any;

  constructor(
    splashScreen: SplashScreen,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.splash = splashScreen;
  }

  ionViewDidLoad() {
    this.splash.hide();
    console.log('ionViewDidLoad IntroPage');
  }

  goMap() {
    this.navCtrl.push(MapPage);
  }
}
