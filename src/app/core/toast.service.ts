import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  message: string | null = null;

  show(message: string) {
    this.message = message;
    setTimeout(() => {
      this.message = null;
    }, 3000);
  }
}
