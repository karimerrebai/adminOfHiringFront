import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor(private http: HttpClient) {}

  getallPlaces() {
    return this.http.get(`${environment.baseUrl}place/getAllPlaces`);
  }
  addplace(place: any) {
    return this.http.post(`${environment.baseUrl}place/createPlace`, place);
  }
  deletePlace(id: any) {
    return this.http.delete(`${environment.baseUrl}place/delete/${id}`);
  }
  updatePlace(id: any, place: any) {
    return this.http.put(`http://localhost:8080/place/update/${id}`, place);
  }
}
