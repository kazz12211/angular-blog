import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-notify',
  templateUrl: './modal-notify.component.html',
  styleUrls: ['./modal-notify.component.css']
})
export class ModalNotifyComponent {

  @Input() title: string;
  @Input() message: string;
  @Input() okCaption: string = 'OK';

  constructor(public activeModal: NgbActiveModal) { }

}

