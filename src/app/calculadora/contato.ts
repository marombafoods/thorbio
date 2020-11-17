
import { Biotipo } from './Biotipo';
import { FrequenciaTreino } from './FrequenciaTreino';

export interface Contato {
  partitionKey: string;
  biotipo: string;
  genero: string;
  idade: number;
  altura: number;
  peso: number;
  frequenciaTreino: string;
  email: string;
  metaCalorica: number;
  metaProteica: number;
}
