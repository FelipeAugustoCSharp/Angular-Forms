import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Injectable({ providedIn: 'root' })
export class cursoResolverGuard implements Resolve<Curso> {

  constructor(private service: CursosService) {
    
  }

  resolve(route: ActivatedRouteSnapshot,
          status: RouterStateSnapshot): Observable<Curso>{
          
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id'])
    }
    return of({
      id: 0, // ou qualquer outro valor padrão válido para 'number'
      nome: '' // ou qualquer outro valor padrão válido para 'string'
    })
  }
}