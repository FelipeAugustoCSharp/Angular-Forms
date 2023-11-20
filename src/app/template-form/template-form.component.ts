import { Component, OnInit } from '@angular/core';
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

  verificaCampoTouched(campo: any){
    return !campo.valid && campo.touched
  }
  aplicaCssErro(campo: any){
    return {
        'has-error': this.verificaCampoTouched(campo)
    }
    
  }

  constructor(private http: HttpClient) {
    
  }







  async consultaCEP(cep:any){
    //var cep = cep.replace(/\D/g, '');
      if (cep != '') {
        var validaCep = /^[0-9]{8}$/;
        if (validaCep.test(cep)) {
          //this.http.get(`//viacep.com.br/ws/${cep}/json`).forEach((dadosJson:any) => dadosJson).then((dados: any) => console.log(dados))
         
            await fetch(`//viacep.com.br/ws/${cep}/json`)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
          
        }
      }
      
  }
}

