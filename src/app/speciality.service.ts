import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpecialityService {
  constructor(private http: HttpClient) {}

  getspecialities() {
    return this.http.get(`${environment.baseUrl}speciality/getAllspecialities`);
  }
  deltespecialty(id: any) {
    return this.http.delete(`${environment.baseUrl}speciality/delete/${id}`);
  }
  addspeciality(speciality: any) {
    return this.http.post(
      `${environment.baseUrl}speciality/createSpeciality`,
      speciality
    );
  }
  updateSpeciality(id: any, speciality: any) {
    return this.http.put(
      `${environment.baseUrl}speciality/updateSpeciality/${id}`,
      speciality
    );
  }
}
