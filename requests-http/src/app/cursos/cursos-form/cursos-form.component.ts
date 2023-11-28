import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Router } from '@angular/router';


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
    private service: CursosService,
    private modalService: AlertModalService,
    private router: Router
    ) { }

  ngOnInit() {    

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]]
    })
  }

  onSubmit(){

    console.log(this.form);
    // console.log(!this.form.get('nome')?.errors);
    // console.log(!this.form.get('nome')?.hasError('required'))
    this.submitted = true    
    if (this.form.valid) {
      console.log('submitted');
      this.service.create(this.form.value).subscribe(
        sucess =>  {
          this.modalService.showAlertSucess('Criado com sucesso')
          this.router.navigate(['/cursos'])
        },
        error =>  this.modalService.showAlertDanger('Erro ao criar curso, tente novamente.'),
        () => console.log('Request Completo')  
      )
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
