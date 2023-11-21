import { Component, Input } from '@angular/core';



@Component({
  selector: 'campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.css']
})
export class CampoControlErroComponent {
  @Input() mostrarErro: boolean = false;
  @Input() msgErro: string = '';
}
