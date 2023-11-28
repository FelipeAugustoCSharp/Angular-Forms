import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {


onClose() {
  this.bsModalRef.hide()
}
  
  @Input() message!:string;
  @Input() type = 'sucess'

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    
  }

}
