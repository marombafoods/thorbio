import { FrequenciaTreino } from './FrequenciaTreino';
import { Biotipo } from './Biotipo';

export class FormulaDeCalculo{
    private biotipo: Biotipo;
    private sexo: string;
    private peso: number;
    private altura: number;
    private idade: number;
    private frequencia: FrequenciaTreino;
    constructor(_biotipo: Biotipo, _sexo: string, _peso: number, _altura: number, _idade: number, _frequencia: FrequenciaTreino) { 
      this.biotipo = _biotipo;
      this.sexo = _sexo;
      this.peso = _peso;
      this.altura = _altura;
      this.idade = _idade;
      this.frequencia = _frequencia;
    }

    realizarCalculoCalorico(): number{
        var resultado: number;
        switch (this.biotipo) {
            case Biotipo.ABAIXO_PESO:
                resultado = this.calcularNormais();
                resultado = this.calcularGrauAtividade(resultado);
                break;
            case Biotipo.NORMAL:
                resultado = this.calcularNormais();
                resultado = this.calcularGrauAtividade(resultado);
                break;
            case Biotipo.ATLETA:
                resultado = this.calcularAtletas();
                resultado = this.calcularGrauAtividade(resultado);
                break;
            case Biotipo.SOBREPESO:
                resultado = this.calcularSobrepeso();
                resultado = this.calcularGrauAtividade(resultado);
                break;
            default:
                break;
        }

        return resultado;
    }
    
    realizarCalculoProteina(): number{
        var resultadoProteina: number;
        switch (this.biotipo) {
            case Biotipo.ABAIXO_PESO:
                resultadoProteina = this.peso * 2;
                break;
            case Biotipo.NORMAL:
                resultadoProteina = this.peso * 2;
                break;
            case Biotipo.ATLETA:
                resultadoProteina = this.peso * 2;
                break;
            case Biotipo.SOBREPESO:
                resultadoProteina = this.peso * 1.4;
                break;
            default:
                break;
        }

        return resultadoProteina;
    }

    private calcularNormais(): number{
        if(this.sexo == "feminino"){
            return (655 + (9.6 * this.peso)+(1.9 * this.altura)-(4.7 * this.idade));
        }
        else if(this.sexo == "masculino"){
            return (66 + (13.8 * this.peso)+(5 * this.altura)-(6.8 * this.idade));
        }
        else{
            return 0;
        }
    }

    private calcularAtletas(): number{
        if(this.sexo == "feminino"){
            return ((24.8 * this.peso)+10);
        }
        else if(this.sexo == "masculino"){
            return ((24.8 * this.peso)+10);
        }
        else{
            return 0;
        }
    }

    private calcularSobrepeso(): number{
        if(this.sexo == "feminino"){
            return ((10 * this.peso) + (6.25 * this.altura) - (5.0 * this.idade) - 161);
        }
        else if(this.sexo == "masculino"){
            return ((10 * this.peso) + (6.25 * this.altura) - (5.0 * this.idade) - 5);
        }
        else{
            return 0;
        }
    }

    private calcularGrauAtividade(resultadoTipo: number): number{
        switch (this.frequencia) {
            case FrequenciaTreino.SEDENTARIO:
                return resultadoTipo * 1.2;
            case FrequenciaTreino.POUCO_ATIVO:
                return resultadoTipo * 1.4;
            case FrequenciaTreino.ATIVO:
                return resultadoTipo * 1.5;
            case FrequenciaTreino.MUITO_ATIVO:
                return resultadoTipo * 1.7;
            default:
                return 0;
        }
    }

    private calcularProteina(){

    }
}