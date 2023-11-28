import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false

  constructor(private fb: FormBuilder) { }

  ngOnInit() {    

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
    })
  }

  onSubmit(){

    console.log(this.form);
    // console.log(!this.form.get('nome')?.errors);
    // console.log(!this.form.get('nome')?.hasError('required'))
    this.submitted = true    
    if (this.form.valid) {
      console.log('submitted');
      
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
