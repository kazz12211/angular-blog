import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(page: number, limit: number): Observable<any> {
    return this.http.get(`${SERVER_URL}/external/users?page=${page}&limit=${limit}`);
  }

  getUser(userId: any) {
    return this.http.get(`${SERVER_URL}/external/user/${userId}`);
  }

  register(user: any) {
    return this.http.post(`${SERVER_URL}/external/register`, user);
  }

  update(user: any) {
    return this.http.put(`${SERVER_URL}/external/users`, user);
  }

  delete(user: any) {
    return this.http.delete(`${SERVER_URL}/external/users/${user._id}`);
  }
}
