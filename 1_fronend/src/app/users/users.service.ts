import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  http = inject(HttpClient);

  constructor() { }

  getUsers():Observable<any> {
    return this.http.get('http://localhost:3000/api/users');
  }
}
