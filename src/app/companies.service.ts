import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(private http: HttpClient) {}

  getAllCompanies() {
    return this.http.get(`${environment.baseUrl}getAllCompanies`);
  }

  deleteCompany(id: any) {
    return this.http.delete(`${environment.baseUrl}deleteCompany/${id}`);
  }
  confirmCompany(id: any) {
    return this.http.get(`${environment.baseUrl}confirmCompany/${id}`);
  }
  getCompanybyid(id: any) {
    return this.http.get(`${environment.baseUrl}c/${id}`);
  }
}
