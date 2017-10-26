import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {AbastecimentoPage} from '../abastecimento/abastecimento'
import { RotasPage } from "../rotas/rotas";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  link() {
    this.navCtrl.push(RotasPage);
  }

  constructor(public navCtrl: NavController) {

  }

}
