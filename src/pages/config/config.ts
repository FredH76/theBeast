import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen'

import { IntroPage } from '../intro/intro';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(public splashScreen: SplashScreen, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
    this.splashScreen.hide();
  }

  goIntro() {
    this.navCtrl.push(IntroPage);
  }
}
