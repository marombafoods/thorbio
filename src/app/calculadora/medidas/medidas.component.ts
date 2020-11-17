import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora.component';
import { Painel } from '../Painel';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.component.html',
  styleUrls: ['./medidas.component.css']
})
export class MedidasComponent implements OnInit {
  genero: string = "feminino";
  idade: number = 35;
  altura: number = 170;
  peso: number = 100;
  valido: boolean = true;

  _calculadora: CalculadoraComponent;

  constructor(calculadora: CalculadoraComponent) {
    this._calculadora = calculadora
  }

  ngOnInit(): void {
  }


  avancarForm() {
    if (this.genero != '' && this.idade > 0 && this.altura > 0 && this.peso > 0) {
      this._calculadora.genero = this.genero;
      this._calculadora.idade = this.idade;
      this._calculadora.altura = this.altura;
      this._calculadora.peso = this.peso;
      this._calculadora.atualizarPainel(Painel.ATIVIDADE_FISICA);
    }
  }

  formatLabelCm(value: number) {
    return value + 'cm';
  }

  voltarPassoAnterior(): void {
    this._calculadora.atualizarPainel(Painel.TIPO);
  }

}
