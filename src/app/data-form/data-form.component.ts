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
cidades: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient) {

  }
  ngOnInit(){
   /* this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
      endereco: new FormGroup({

      })
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [, Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento:[null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
    })
  });
}


  verificaEmailInvalido() {
    if (this.formulario.controls['email'].errors) {
      return this.formulario.controls['email'].errors['email']
    }


    //return !this.formulario.get(campo) && this.formulario.get(campo)?.touched;
  }


  aplicaCssErro(campo:string) {
    //console.log(this.verificaValidTouched(campo));
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
