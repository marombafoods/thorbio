import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora.component';
import { Painel } from '../Painel';
import { FrequenciaTreino } from '../FrequenciaTreino';

@Component({
  selector: 'app-atividade-fisica',
  templateUrl: './atividade-fisica.component.html',
  styleUrls: ['./atividade-fisica.component.css']
})
export class AtividadeFisicaComponent implements OnInit {

  frequencia: FrequenciaTreino = null;
  card_01: string = "";
  card_02: string = "";
  card_03: string = "";
  card_04: string = "";
  disabled: boolean = true;
  _calculadora: CalculadoraComponent;

  constructor(calculadora: CalculadoraComponent) { 
    this._calculadora = calculadora
  }

  ngOnInit(): void {
    this.card_01 = "card-01";
    this.card_02 = "card-02";
    this.card_03 = "card-03";
    this.card_04 = "card-04";
  }

  avancarForm(){
    if(this.frequencia != null){
      this._calculadora.frequenciaTreino = this.frequencia;
      this._calculadora.atualizarPainel(Painel.RESULTADO);
    }
  }

  voltarPassoAnterior(): void {
    this._calculadora.atualizarPainel(Painel.MEDIDAS);
  }

  escolherFrequencia(tipo: string){
    switch (tipo) {
      case FrequenciaTreino.SEDENTARIO.toString():
        this.frequencia = FrequenciaTreino.SEDENTARIO;
        this.card_01 = "card-01 selected";
        this.card_02 = "card-02";
        this.card_03 = "card-03";
        this.card_04 = "card-04";
        this.disabled = false;
        break;
      case FrequenciaTreino.POUCO_ATIVO.toString():
        this.frequencia = FrequenciaTreino.POUCO_ATIVO;
        this.card_01 = "card-01";
        this.card_02 = "card-02 selected";
        this.card_03 = "card-03";
        this.card_04 = "card-04";
        this.disabled = false;
        break;
      case FrequenciaTreino.ATIVO.toString():
        this.frequencia = FrequenciaTreino.ATIVO;
        this.card_01 = "card-01";
        this.card_02 = "card-02";
        this.card_03 = "card-03 selected";
        this.card_04 = "card-04";
        this.disabled = false;
        break;
      case FrequenciaTreino.MUITO_ATIVO.toString():
        this.frequencia = FrequenciaTreino.MUITO_ATIVO;
        this.card_01 = "card-01";
        this.card_02 = "card-02";
        this.card_03 = "card-03";
        this.card_04 = "card-04 selected";
        this.disabled = false;
        break;
      default:
        this.frequencia = null;
        this.card_01 = "card-01";
        this.card_02 = "card-02";
        this.card_03 = "card-03";
        this.card_04 = "card-04";
        this.disabled = true;
        break;
    }
  }

}


