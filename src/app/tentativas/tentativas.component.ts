import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import {Coracao} from '../shared/coracao.model';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit,OnChanges {

  
  public coracoes: Array<Coracao> = new Array(new Coracao(true),new Coracao(true),new Coracao(true))
  
  //Você precisa importar Input de @angular/core
  @Input() public tentativas:number
  
  constructor() { 
        
  }

  ngOnInit() {

  }
  //É executado na alteração de valores de componentes pais para componentes filhos
  ngOnChanges(): void {
    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas
      
      this.coracoes[indice-1].cheio = false

    }

  }

}
