import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

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
}
