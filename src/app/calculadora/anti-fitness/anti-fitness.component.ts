import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anti-fitness',
  templateUrl: './anti-fitness.component.html',
  styleUrls: ['./anti-fitness.component.css']
})
export class AntiFitnessComponent implements OnInit {

  constructor() { }

  card_01: string = "";
  card_02: string = "";
  livros: boolean = false;
  parte1: boolean = false;
  parte2: boolean = false;

  ngOnInit(): void {
    this.card_01 = "card-01";
    this.card_02 = "card-02";
    this.livros = true;
    this.parte1 = false;
    this.parte2 = false;
  }

  escolherLivro(tipo: string){
    switch (tipo) {
      case "0":
        this.card_01 = "card-01 selected";
        this.card_02 = "card-02";
        this.livros = false;
        this.parte1 = true;
        this.parte2 = false;
        break;
      case "1":
        this.card_01 = "card-01";
        this.card_02 = "card-02 selected";
        this.livros = false;
        this.parte1 = false;
        this.parte2 = true;
        break;
    }
  }

  voltarParaLivros(){
    this.card_01 = "card-01";
    this.card_02 = "card-02";
    this.livros = true;
    this.parte1 = false;
    this.parte2 = false;
  }

}
