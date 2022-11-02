import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}
  login(login: any) {
    return this.http.post(`http://localhost:8080/login`, login);
  }
  registeradmin(admin: any) {
    return this.http.post(`${environment.baseUrl}registerAdmin`, admin);
  }

  logout(logout: any) {
    return this.http.post(`${environment.baseUrl}logout`, logout);
  }
}
