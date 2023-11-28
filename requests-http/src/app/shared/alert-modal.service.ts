import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCESS = 'sucess',
  ALERT = 'alert',
  WARNING = 'warning'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(
    private modalService: BsModalService
  ) { }

  private showAlert(message:string, type: string){
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
  }
  showAlertSucess(message:string){
    this.showAlert(message, AlertTypes.SUCESS)
  }
  showAlertDanger(message:string){
    this.showAlert(message, AlertTypes.DANGER)
  }
}
