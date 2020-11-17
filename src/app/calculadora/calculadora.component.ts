import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Painel } from './Painel';
import { FormulaDeCalculo } from './FormulaDeCalculo';
import { Biotipo } from './Biotipo';
import { FrequenciaTreino } from './FrequenciaTreino';
import {ContatoService} from './contato.service';

import { Contato } from './contato';
import { stringify } from '@angular/compiler/src/util';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  providers: [ ContatoService ],
  styleUrls: ['./calculadora.component.css']
})

@Injectable()
export class CalculadoraComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  formTipoVisivel: boolean = true;
  formMedidasVisivel: boolean = false;
  formAtividadeVisivel: boolean = false;
  formResultadoVisivel: boolean = false;
  formAntiFitnessVisivel: boolean = false;
  resultadoCalculoCalorico: number = 0;
  resultadoCalculoProteina: number = 0;


  biotipo: Biotipo = null;
  genero: string = "";
  idade: number = 0;
  altura: number = 0;
  peso: number = 0;
  frequenciaTreino: FrequenciaTreino = null;
  email: string = "";




  constructor(private contatoService: ContatoService) {}

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  atualizarPainel(painel: Painel): void {
    switch (painel) {
      case Painel.TIPO:
        this.formTipoVisivel = true;
        this.formMedidasVisivel = false;
        this.formAtividadeVisivel = false;
        this.formResultadoVisivel = false;
        this.formAntiFitnessVisivel = false;
        break;
      case Painel.MEDIDAS:
        this.formTipoVisivel = false;
        this.formMedidasVisivel = true;
        this.formAtividadeVisivel = false;
        this.formResultadoVisivel = false;
        this.formAntiFitnessVisivel = false;
        break;
      case Painel.ATIVIDADE_FISICA:
        this.formTipoVisivel = false;
        this.formMedidasVisivel = false;
        this.formAtividadeVisivel = true;
        this.formResultadoVisivel = false;
        this.formAntiFitnessVisivel = false;
        break;
      case Painel.RESULTADO:
        this.formTipoVisivel = false;
        this.formMedidasVisivel = false;
        this.formAtividadeVisivel = false;
        this.formResultadoVisivel = true;
        this.formAntiFitnessVisivel = false;
        var formulaCalculo = new FormulaDeCalculo(this.biotipo, this.genero, this.peso, this.altura, this.idade, this.frequenciaTreino);
        this.resultadoCalculoCalorico = formulaCalculo.realizarCalculoCalorico();
        this.resultadoCalculoProteina = formulaCalculo.realizarCalculoProteina();
        break;
      case Painel.ANTI_FITNESS:
        this.formTipoVisivel = false;
        this.formMedidasVisivel = false;
        this.formAtividadeVisivel = false;
        this.formResultadoVisivel = false;
        this.formAntiFitnessVisivel = true;
        this.salvar(Biotipo[this.biotipo], this.genero, this.idade, this.altura, this.peso, FrequenciaTreino[this.frequenciaTreino], this.resultadoCalculoCalorico,
                    this.resultadoCalculoProteina, this.email);
        
        break;
      default:
        console.log("No such day exists!");
        break;
    }
  }
  

  salvar(biotipo: string, genero: string, idade: number, altura: number, peso: number,
    frequenciaTreino: string, metaCalorica: number, metaProteica: number, email: string): void {
    
    const novoContato: Contato = { biotipo, genero, idade, altura, peso, frequenciaTreino, metaCalorica, metaProteica, email } as Contato;
    this.contatoService.salvarContato(novoContato).subscribe(data => { novoContato.partitionKey = data.partitionKey });
  }

}

