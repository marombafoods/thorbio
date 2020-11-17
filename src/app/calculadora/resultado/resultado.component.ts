import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';

import {ErrorStateMatcher} from '@angular/material/core';
import { CalculadoraComponent } from '../calculadora.component';
import { Painel } from '../Painel';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  form: FormGroup;
  resultadoCalculo: number;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  _calculadora: CalculadoraComponent;

  constructor(private formBuilder: FormBuilder, calculadora: CalculadoraComponent) {
    this._calculadora = calculadora
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit(f: NgForm) {
    this._calculadora.email = f.form.value["email"];
    this._calculadora.atualizarPainel(Painel.ANTI_FITNESS);
  }

}
