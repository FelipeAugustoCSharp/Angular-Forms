import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  onSubmit(formulario:any) {
    console.log(formulario);

    // form.value
    // console.log(this.usuario);

    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .subscribe(dados => {
        console.log(dados);
        formulario.form.reset();
      });
  }

  constructor(
    private http: HttpClient,
    //private cepService: ConsultaCepService
  ) { }

  ngOnInit() {
  }

  verificaValidTouched(campo:any) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo:any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  consultaCEP(cep:any, form:any) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
     // this.cepService.consultaCEP(cep)
      //.subscribe((dados:any) => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados:any, formulario:any) {
    /*formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    // console.log(form);
  }

  resetaDadosForm(formulario:any) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}


/*import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operators'


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit{
  
  usuario:any = {
    nome: null,
    email: null,
    endereco:{
      cep:'t',
      numero:'t',
      complemento: 't',
      rua:'t',
      bairro:'t',
      cidade:'t',
      estado:'t'
    }
  }

  onSubmit(form:any){
    //console.log(form);
    //console.log(this.usuario);
    
  }
  ngOnInit() {
    
  }

  verificaValidTouched(campo: any){
    return !campo.valid && campo.touched
  }
  aplicaCssErro(campo: any){
    return {
        'has-error': this.verificaValidTouched(campo)
    }
    
  }

  constructor(private http: HttpClient) {
    
  }







    consultaCEP(cep:any, form:any){
    //var cep = cep.replace(/\D/g, '');
      if (cep != '') {
        var validaCep = /^[0-9]{8}$/;
        if (validaCep.test(cep)) {
          //this.http.get(`//viacep.com.br/ws/${cep}/json`).forEach((dadosJson:any) => dadosJson).then((dados: any) => this.populaDados(cep,form))
         
             fetch(`//viacep.com.br/ws/${cep}/json`)
            .then(res => res.json())
            .then(res =>  res =  this.populaDados(cep,form))
            .catch(err => console.log(err))
          
        }
      }
      
  }

  populaDados(dados: any, form: any){
    form.setValue({
      nome: null,
      email: null,
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }
}

*/