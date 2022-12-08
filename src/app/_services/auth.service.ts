import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API_URL = 'http://localhost:8080/api/auth/';
const httpHeaderSection = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public http: HttpClient) { }
  login(userName: string, passWord: string): Observable<any> {
    return this.http.post(AUTH_API_URL + 'siginin', {
      userName,
      passWord
    }, httpHeaderSection)
  }

  register(userName: string, password: string, userEmail: string): Observable<any> {
    return this.http.post(AUTH_API_URL + 'signup', {
      userName,
      password,
      userEmail
    }, httpHeaderSection)
  }
}
