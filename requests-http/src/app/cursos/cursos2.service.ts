import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { Curso } from './curso';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { environmentJson } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Cursos2Service extends CrudService<Curso>{

constructor(protected override http: HttpClient) {
  super(http, `${environmentJson.API}cursos`)
 }


  //VERIFICAR SE JÁ EXISTE O NOME NA ISTA ANTES DE ADICIONAR
}

