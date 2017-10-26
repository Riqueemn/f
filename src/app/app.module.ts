import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { RouterModule } from '@angular/router';

// import { rotas } from './rotas';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AbastecimentoPage } from "../pages/abastecimento/abastecimento";
import { Abastecimento2Page } from "../pages/abastecimento2/abastecimento2";
import { Abastecimento3Page } from "../pages/abastecimento3/abastecimento3";
import { Abastecimento4Page } from "../pages/abastecimento4/abastecimento4";
import { RotasPage } from "../pages/rotas/rotas";

  @NgModule({
  declarations: [
    MyApp,
    HomePage,
    AbastecimentoPage,
    Abastecimento2Page,
    Abastecimento3Page,
    Abastecimento4Page,
    RotasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // RouterModule.forRoot(rotas)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AbastecimentoPage,
    Abastecimento2Page,
    Abastecimento3Page,
    Abastecimento4Page,
    RotasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
