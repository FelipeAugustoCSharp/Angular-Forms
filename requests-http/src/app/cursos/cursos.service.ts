
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './curso';
import { delay, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  private readonly API:string = `${environment.API}cursos`

  list(){
    return this.http.get<Curso[]>(this.API)
    .pipe(
      delay(1000),
      tap(console.log)
    )
  }
  
  loadById(id:number){
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1))
  }

  private create(curso: any){
    return this.http.post(this.API, curso).pipe(take(1))
  }

  private update(curso:any){
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1))
  }

  save(curso:any){
    if(curso.id){
      return this.update(curso)
    }
    return this.create(curso)
  }
  verifyIfExists(){
    //verificar se o nome X já existe na lista/banco de dados
  }
  remove(id:number){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1))
  }
}
