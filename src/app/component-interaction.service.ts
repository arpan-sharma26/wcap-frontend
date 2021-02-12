import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentInteractionService {
  private userSource = new Subject<string>();
  userData = this.userSource.asObservable();

  constructor() {}

  uploadUser(message: any) {
    this.userSource.next(message);
  }
}
