import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public challenge = [
    { num: 1, xPos: 10, yPos: 50, state: "inProgress" },
    { num: 2, xPos: 10, yPos: 50 }
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
