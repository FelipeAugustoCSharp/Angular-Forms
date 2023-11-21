import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
      nome: [null],
      email: [null]
    });
  }

  onSubmit(){
    console.log(this.formulario.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)).subscribe(res => console.log(res)
    )
  }


}
