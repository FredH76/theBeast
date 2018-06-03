import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConfigPage } from '../pages/config/config';
import { IntroPage } from '../pages/intro/intro';
import { MapPage } from '../pages/map/map';
import { FullHeightDirective } from '../directives/full-height/full-height';

@NgModule({
  declarations: [
    MyApp,
    ConfigPage,
    IntroPage,
    MapPage,
    FullHeightDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConfigPage,
    IntroPage,
    MapPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
