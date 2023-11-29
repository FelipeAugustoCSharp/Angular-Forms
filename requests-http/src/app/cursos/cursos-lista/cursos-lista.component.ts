import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { EMPTY, Observable, Subject, catchError, empty, switchMap, take } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces:true
})
export class CursosListaComponent implements OnInit, OnDestroy {


  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal') deleteModal:any;


  //cursos: Curso[] = [];
  cursos$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();
  cursoSelecionado!: Curso;

  
  constructor(
    private service: CursosService,
    private modalService: BsModalService,
    private alertServices: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    // this.service.list()
    // .subscribe(dados => this.cursos = dados)
    this.onRefresh();
  }
  onRefresh(){
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error => {
        console.log(error);
        //this.error$.next(true);
        this.handleError();
        return empty()
        
      })
    );
    // this.service.list()
    // .pipe(
    //   catchError(error => empty())
    // )
    // .subscribe(
    //   dados =>console.log(dados),
      // error => console.log(error),
      // () => console.log('Observable completo')
      
    // );
  }
  
  handleError(){
    this.alertServices.showAlertDanger(' Erro ao carregar cursos. Tente novamente mais tarde')
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = ' Erro ao carregar cursos. Tente novamente mais tarde';
  }

  onEdit(id:number){
 
    this.router.navigate(['editar',id],{relativeTo: this.route})

  }

  ngOnDestroy() {
  
  }

  onDelete(curso:any) {
    this.cursoSelecionado = curso;
       //this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
     const result$ = this.alertServices.showConfirm('Confirmação','Tem certeza que deseja remover este curso?')
     result$.asObservable().pipe(
      take(1),
      switchMap(resultado => resultado ? this.service.remove(curso.id) : EMPTY)
      )
      .subscribe(
        next => {
          this.onRefresh()
          this.deleteModalRef?.hide()
        },
        error => this.alertServices.showAlertDanger(' Erro ao remover curso. Tente novamente mais tarde')
      )
      
   
    }
  onConfirmDelete(){
    
  }
  onDeniedDelete(){
    this.deleteModalRef?.hide()
  }
}
