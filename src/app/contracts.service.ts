import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContractsService {
  constructor(private http: HttpClient) {}

  getallcontracts() {
    return this.http.get(`${environment.baseUrl}skills/getallSkills`);
  }

  deletecontracts(id: any) {
    return this.http.delete(`${environment.baseUrl}skills/delete/${id}`);
  }
  addContract(contract: any) {
    return this.http.post(
      `${environment.baseUrl}skills/createSkills`,
      contract
    );
  }
  updateContract(id: any, contract: any) {
    return this.http.put(`${environment.baseUrl}skills/update/${id}`,contract);
  }
}
