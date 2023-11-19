import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  
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
    console.log(form);
    console.log(this.usuario);
    
  }
}
