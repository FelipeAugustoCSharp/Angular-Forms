
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
      delay(2000),
      tap(console.log)
    )
  }

  create(curso: any){
    return this.http.post(this.API, curso).pipe(take(1))
  }
}
