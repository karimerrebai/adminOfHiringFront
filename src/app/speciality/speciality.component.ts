import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SpecialityService } from '../speciality.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.css'],
})
export class SpecialityComponent implements OnInit {
  specialties: any;
  closeResult = '';
  Specialty: any;
  specialityForm: FormGroup;
  constructor(
    private specialityservice: SpecialityService,
    private modalService: NgbModal,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getallSpecialties();
    this.specialityForm = this.formbuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      _id: [null],
    });
  }

  getallSpecialties() {
    this.specialityservice.getspecialities().subscribe((res: any) => {
      this.specialties = res['data'];
      console.log('list specialties', this.specialties);
    });
  }

  createSpeciality() {
    console.log(this.specialityForm.value);
    this.specialityservice
      .addspeciality(this.specialityForm.value)
      .subscribe((res: any) => {
        Swal.fire('category created succesfully ! ');

        this.getallSpecialties();
      });
  }
  //update speciality
  updateSpeciality() {
    this.specialityservice
      .updateSpeciality(
        this.specialityForm.value._id,
        this.specialityForm.value
      )
      .subscribe((res: any) => {
        Swal.fire('speciality updated');
        this.getallSpecialties();
      });
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
  open2(content: any, speciality: any) {
    console.log(speciality);
    this.specialityForm.patchValue({
      name: speciality.name,
      description: speciality.description,
      _id: speciality._id,
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

  deleteSpecialty(id: any) {
    {
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
          this.specialityservice.deltespecialty(id).subscribe((res: any) => {
            Swal.fire(
              'Deleted!',
              'Your speciality has been deleted.',
              'success'
            );
            this.getallSpecialties();
          });
        }
      });
    }
  }
}
