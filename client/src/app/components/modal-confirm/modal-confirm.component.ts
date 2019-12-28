import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent {

  @Input() title: string;
  @Input() message: string;
  @Input() okCaption: string = 'OK';
  @Input() cancelCaption: string = 'Cancel';

  constructor(public activeModal: NgbActiveModal) { }

  

}
