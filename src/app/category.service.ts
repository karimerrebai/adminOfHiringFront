import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllcategories() {
    return this.http.get(`${environment.baseUrl}category/gettAllCategories`);
  }

  deleteCategory(id: any) {
    return this.http.delete(`${environment.baseUrl}category/delete/${id}`);
  }
  addCategory(category: any) {
    return this.http.post(
      `${environment.baseUrl}category/createCategory`,
      category
    );
  }

  updateCategory(id: any, category: any) {
    return this.http.put(
      `http://localhost:8080/category/updatecategory/${id}`,
      category
    );
  }
}
