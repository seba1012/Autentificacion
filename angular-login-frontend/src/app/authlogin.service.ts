import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthloginService {

  constructor(
    private http: HttpClient, // 
  ) { }

  autent_login_user(username: string, password: string) {
    return this.http.post<any>('http://localhost:3000/user/login', { username, password })
  }
}
