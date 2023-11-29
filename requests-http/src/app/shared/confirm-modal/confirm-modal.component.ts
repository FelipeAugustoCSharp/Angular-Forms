import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { CursosService } from 'src/app/cursos/cursos.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {


  @Input() title!: string  ;
  @Input() msg!: string  ;
  @Input() cancelTxt: string = 'Cancel' ;
  @Input() confirmTxt: string = 'Confirm';
  

  confirmResult!: Subject<boolean>;

  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.confirmResult = new Subject();
  }

  onConfirm(){
    this.confirmAndClose(true)
  }
  onDeniedDelete(){
    this.confirmAndClose(false)
  }
  private confirmAndClose(value: boolean){
    this.confirmResult.next(value);
    this.bsModalRef.hide()
  }

}
