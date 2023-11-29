import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos2Service } from '../cursos2.service';



@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false

  constructor(
    private fb: FormBuilder,
    private service: Cursos2Service,
    private modalService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {    

  //   this.route.params.subscribe(
  //     (params:any) => {
  //     const id = params['id'];
  //     const curso$ =   this.service.loadById(id);
  //     curso$.subscribe(curso => {
  //       this.updateForm(curso)
  //     })
  //   }
  // );
//////////////////////////////////
    // this.route.params
    // .pipe(
    //   map((params:any) => params['id']),
    //   switchMap(id => this.service.loadById(id))
    // )
    // .subscribe((curso) => this.updateForm(curso)
    // )

    const curso = this.route.snapshot.data['curso']
    console.log(curso);

    this.form = this.fb.group({
      id:[curso.id] ,
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]]
    });

  }
  // updateForm(curso:any){
  //   this.form.patchValue({
  //     id: curso.id,
  //     nome: curso.nome
  //   })
  // }

  onSubmit(){
    
    console.log(this.form);
    // console.log(!this.form.get('nome')?.errors);
    // console.log(!this.form.get('nome')?.hasError('required'))
    this.submitted = true    
    if (this.form.valid) {
      console.log('submitted');


    let msgSuccess = 'Curso criado com sucesso!';
    let msgError = 'Erro ao criar curso, tente novamente.'
    
    if (this.form.value.id) {
      msgSuccess = 'Curso atualizado com sucesso!';
      msgError = 'Erro ao atualizar curso, tente novamente.'
    }
      
      this.service.save(this.form.value).subscribe(
        next => {
          this.modalService.showAlertSucess(msgSuccess);
            this.router.navigate(['/cursos'])
        },
        error => {
          this.modalService.showAlertSucess(msgError);
        },
        () => console.log('Works')
      )
      /*Atualizar Item
      if (this.form.value.id) {
        this.service.update(this.form.value).subscribe(
          sucess =>  {
            this.modalService.showAlertSucess('Curso atualizado com sucesso')
            this.router.navigate(['/cursos'])
          },
          error => this.modalService.showAlertDanger('Erro ao atualizar curso, tente novamente.'),
          () => console.log('Atualizado com sucesso')
          
        )
      }else{ //CRIAR Item
        //VERIFICAR SE O ITEM JÁ EXISTE
        this.service.create(this.form.value).subscribe(
          sucess =>  {
            this.modalService.showAlertSucess('Criado com sucesso');
            this.router.navigate(['/cursos']);
          },
          error =>  this.modalService.showAlertDanger('Erro ao criar curso, tente novamente.'),
          () => console.log('Request Completo')  
        )
      }*/
      
    }
  }
  onCancel(){
    this.submitted = false
    this.form.reset()
     //console.log('onCancel');
  }
  typeError(field:string, type: string){
    return this.form.controls[field].hasError(type) ? true : null;
  }
  errorExist(field:string){    
    return !this.form.get(field)?.errors
  }



}
