import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  
  usuario:any = {
    nome: null,
    email: null
  }

  onSubmit(form:any){
    console.log(form);
    console.log(this.usuario);
    
  }
}
