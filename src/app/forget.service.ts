import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ForgetService {
  constructor(private http: HttpClient) {}

  forgetPassword(user: any) {
    return this.http.post(`${environment.baseUrl}forgetPassword`, user);
  }
  resetpassword(token: any, password :any){
    return this.http.post(`${environment.baseUrl}resetPassword/${token}`,password, )
  }
}
