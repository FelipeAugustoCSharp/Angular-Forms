import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces:true
})
export class CursosListaComponent implements OnInit, OnDestroy {

  //cursos: Curso[] = [];
  cursos$!: Observable<Curso[]>;

  constructor(private service: CursosService) { }

  ngOnInit() {
    // this.service.list()
    // .subscribe(dados => this.cursos = dados)
    this.cursos$ = this.service.list()
  }

  ngOnDestroy() {
  
  }

}
