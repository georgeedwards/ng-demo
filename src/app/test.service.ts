import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TestService {

  constructor() { }

  getComments() {
    return Observable.of('Test1')
  }
}
