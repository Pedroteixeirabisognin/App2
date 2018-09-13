import { Component, OnInit } from '@angular/core';
import {Frase} from '../shared/frase.model';
import {FRASES} from './frases-mock';
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Array<Frase> = FRASES
  constructor() {console.log(this.frases);}

  public instrucao:string = 'Traduza a frase'

  ngOnInit() {
  }

  public atualizaResposta():void {
    console.log('teste');
    
  }
}
