import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCESS = 'success',
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

  private showAlert(message:string, type: string, dismissTimeout?: number){
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeout) {
      setTimeout(() => {
        bsModalRef.hide()
      }, dismissTimeout);
    }
  }
  showAlertSucess(message:string){
    this.showAlert(message, AlertTypes.SUCESS, 1000)
  }
  showAlertDanger(message:string){
    this.showAlert(message, AlertTypes.DANGER)
  }
  showConfirm(title:string, msg: string, confirmTxt?:string, cancelTxt?:string){
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if (confirmTxt) {
      bsModalRef.content.confirmTxt = confirmTxt;
    }
    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
      
    }
    console.log('entrou');
    return (<ConfirmModalComponent>bsModalRef.content).confirmResult
  }

}
