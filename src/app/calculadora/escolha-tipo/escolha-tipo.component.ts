import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora.component';
import { NgForm } from '@angular/forms';
import { Painel } from '../Painel';
import { Biotipo } from '../Biotipo';

@Component({
  selector: 'app-escolha-tipo',
  templateUrl: './escolha-tipo.component.html',
  styleUrls: ['./escolha-tipo.component.css']
})
export class EscolhaTipoComponent implements OnInit {
  biotipo: Biotipo = null;
  card_01: string = "";
  card_02: string = "";
  card_03: string = "";
  card_04: string = "";
  btn_selecionado_01: boolean = false;
  btn_selecionado_02: boolean = false;
  btn_selecionado_03: boolean = false;
  btn_selecionado_04: boolean = false;
  _calculadora: CalculadoraComponent;

  constructor(calculadora: CalculadoraComponent) { 
    this._calculadora = calculadora
  }

  ngOnInit(): void {
    this.card_01 = "card-01";
    this.card_02 = "card-02 ";
    this.card_03 = "card-03";
    this.card_04 = "card-04";
    this.btn_selecionado_01 = false;
    this.btn_selecionado_02 = false;
    this.btn_selecionado_03 = false;
    this.btn_selecionado_04 = false;
  }

  onSubmit(f: NgForm) {
    this._calculadora.atualizarPainel(Painel.MEDIDAS);
  }

  avancarForm(){
    if(this.biotipo != null){
      this._calculadora.biotipo = this.biotipo;
      this._calculadora.atualizarPainel(Painel.MEDIDAS);
    }
  }

  escolherBiotipo(tipo: string){
    switch (tipo) {
      case Biotipo.ABAIXO_PESO.toString():
        this.biotipo = Biotipo.ABAIXO_PESO;
        this.card_01 = "card-01 selected";
        this.card_02 = "card-02";
        this.card_03 = "card-03";
        this.card_04 = "card-04";
        this.btn_selecionado_01 = true;
        this.btn_selecionado_02 = false;
        this.btn_selecionado_03 = false;
        this.btn_selecionado_04 = false;
        break;
      case Biotipo.NORMAL.toString():
        this.biotipo = Biotipo.NORMAL;
        this.card_01 = "card-01";
        this.card_02 = "card-02 selected";
        this.card_03 = "card-03";
        this.card_04 = "card-04";
        this.btn_selecionado_01 = false;
        this.btn_selecionado_02 = true;
        this.btn_selecionado_03 = false;
        this.btn_selecionado_04 = false;
        break;
      case Biotipo.ATLETA.toString():
        this.biotipo = Biotipo.ATLETA;
        this.card_01 = "card-01";
        this.card_02 = "card-02";
        this.card_03 = "card-03 selected";
        this.card_04 = "card-04";
        this.btn_selecionado_01 = false;
        this.btn_selecionado_02 = false;
        this.btn_selecionado_03 = true;
        this.btn_selecionado_04 = false;
        break;
      case Biotipo.SOBREPESO.toString():
        this.biotipo = Biotipo.SOBREPESO;
        this.card_01 = "card-01";
        this.card_02 = "card-02";
        this.card_03 = "card-03";
        this.card_04 = "card-04 selected";
        this.btn_selecionado_01 = false;
        this.btn_selecionado_02 = false;
        this.btn_selecionado_03 = false;
        this.btn_selecionado_04 = true;
        break;
      default:
        this.biotipo = null;
        this.card_01 = "card-01";
        this.card_02 = "card-02 selected";
        this.card_03 = "card-03";
        this.card_04 = "card-04";
        this.btn_selecionado_01 = false;
        this.btn_selecionado_02 = true;
        this.btn_selecionado_03 = false;
        this.btn_selecionado_04 = false;
        break;
    }
  }
}
