import { Injectable } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalConfirmComponent } from '../components/modal-confirm/modal-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  confirm(title: string, message: string, okCaption?: string, cancelCaption?: string): Promise<boolean> {
    const modalRef = this.modalService.open(ModalConfirmComponent);
    const component = modalRef.componentInstance as ModalConfirmComponent;
    if (component != null) {
      component.title = title;
      component.message = message;
      component.okCaption = okCaption || 'OK';
      component.cancelCaption = cancelCaption || 'Cancel';
    }

    return modalRef.result.then(result => {
      return true;
    }, err => {
      return false;
    });
  }
}
