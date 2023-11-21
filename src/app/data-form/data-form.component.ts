import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit{

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient) {
    
  }
  ngOnInit(){
    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [, Validators.required, Validators.email]]
    });
  }

  verificaValidTouched(campo:any) {
    return !this.formulario.controls[campo].valid && this.formulario.controls[campo].touched
    //return !this.formulario.get(campo) && this.formulario.get(campo)?.touched;
  }

  verificaEmailInvalido(campo:any) {
    if (this.formulario.controls['email'].errors) {
      return this.formulario.controls['email'].errors['email']
    }
    //return !this.formulario.get(campo) && this.formulario.get(campo)?.touched;
  }


  aplicaCssErro(campo:any) {
    return {      
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }




  onSubmit(){
    console.log(this.formulario.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)).subscribe(res => {
      console.log(res)
      //reseta o form
    },((error:any) => alert('erro: '+ error)));
  }

  cancelar(){
    this.formulario.reset();
  }
}
