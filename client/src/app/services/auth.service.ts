import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SERVER_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user: User): Observable<any> {
    return this.http.post<any>(`${SERVER_URL}/auth/signin`, user);
  }

  loggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }

  setLoggedIn(token: string, username: string) {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('username', username);
  }

  getToken(): string {
    return sessionStorage.getItem('token');
  }

  getUsername(): string {
    return sessionStorage.getItem('username');
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}


export interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}