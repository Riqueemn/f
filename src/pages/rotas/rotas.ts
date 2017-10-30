import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbastecimentoPage } from '../abastecimento/abastecimento';

@IonicPage()
@Component({
  selector: 'page-rotas',
  templateUrl: 'rotas.html',
})
export class RotasPage {

  abastecimento:boolean = true
  abastecimento2:boolean = false;
  abastecimento3:boolean = false;
  abastecimento4:boolean = false;

  posto: string;
  
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // this.posto = informacoes.posto;
  }

  finalizar(){
    this.navCtrl.pop();
  }

}
