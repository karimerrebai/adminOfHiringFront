import { Component, OnInit, TemplateRef } from '@angular/core';
import Swal from 'sweetalert2';
import { CategoryService } from '../category.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  listCategories: any;
  closeResult = '';
  category: any;
  p: number = 1; //initialisation du pagination
  pagin: any;
  search: any;

  categoryForm: FormGroup;
  constructor(
    private categoryservice: CategoryService,
    private modalService: NgbModal,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.formbuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      _id: [null],
    });
    this.getCategories();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  createCategory() {
    this.categoryservice.addCategory(this.categoryForm.value).subscribe({
      next: (res: any) => {
        console.log(this.category);
        console.log(res);
        Swal.fire('category created succesfully ! ');
        this.getCategories();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getCategories() {
    this.categoryservice.getAllcategories().subscribe((res: any) => {
      this.listCategories = res['data'];
      console.log('listCategories', this.listCategories);
    });
  }

  updatecategory() {
    this.categoryservice
      .updateCategory(this.categoryForm.value._id, this.categoryForm.value)
      .subscribe((res: any) => {
        Swal.fire('category updated');
        this.getCategories();
      });
  }

  deleteCategory(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryservice.deleteCategory(id).subscribe((res: any) => {
          Swal.fire('Deleted!', 'Your Category has been deleted.', 'success');
          this.getCategories();
        });
      }
    });
  }
  open1(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  //update category with modal
  open2(content: any, category: any) {
    this.category = category;
    // console.log(category);
    this.categoryForm.patchValue({
      name: category.name,
      description: category.description,
      _id: category._id,
    });
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
}
