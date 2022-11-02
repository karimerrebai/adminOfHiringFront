import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OffresService {
  constructor(private http: HttpClient) {}

  getalloffres() {
    return this.http.get(`${environment.baseUrl}offre/allOffres`);
  }
  confirmoffre(id: any) {
    return this.http.get(`${environment.baseUrl}confirmOffre/${id}`);
  }


}
