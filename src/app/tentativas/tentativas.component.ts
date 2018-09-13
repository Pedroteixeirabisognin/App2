import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Coracao} from '../shared/coracao.model';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  
  public coracoes: Array<Coracao> = new Array(new Coracao(true),new Coracao(true),new Coracao(true))
  
  //Você precisa importar Input de @angular/core
  @Input() public tentativas:number
  
  constructor() { 
    console.log(this.coracoes);
        
  }

  ngOnInit() {
    console.log('Tentativas restantes: ', this.tentativas);

  }



}
