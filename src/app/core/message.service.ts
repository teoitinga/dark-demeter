import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private notify  = new Subject();
  public notifyObservable$ = this.notify.asObservable();

  constructor(
    private toastr: ToastrService
  ) { }
  showSuccess(titulo, message) {
    this.toastr.success(message, titulo);
    this.notify.next(true);
  }
  showWarning(titulo, message) {
    this.toastr.warning(message, titulo);
    this.notify.next(true);
  }
  showError(titulo, message) {
    this.toastr.error(message, titulo);
    this.notify.next(true);
  }
}
