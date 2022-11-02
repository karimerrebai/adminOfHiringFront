import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-listplaces',
  templateUrl: './listplaces.component.html',
  styleUrls: ['./listplaces.component.css'],
})
export class ListplacesComponent implements OnInit {
  places: any;
  Form: FormGroup;
  closeResult = '';
  constructor(
    private placeservice: PlacesService,
    private formbuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.Form = this.formbuilder.group({
      name: ['', Validators.required],
      _id: ['',Validators.required]
    });
    this.getallplaces();
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
  addPlace() {
    this.placeservice.addplace(this.Form.value).subscribe((res: any) => {
      Swal.fire('category created succesfully ! ');
      this.getallplaces();
    });
  }
  updatePlace() {
    this.placeservice
      .updatePlace(this.Form.value._id, this.Form.value)
      .subscribe((res: any) => {
        Swal.fire('place updated');
        this.getallplaces();
      });
  }

  getallplaces() {
    this.placeservice.getallPlaces().subscribe((res: any) => {
      this.places = res['data'];
      console.log('listPLaces', this.places);
    });
  }
  deletePlace(id: any) {
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
        this.placeservice.deletePlace(id).subscribe((res: any) => {
          Swal.fire('Deleted!', 'Your Category has been deleted.', 'success');
          this.getallplaces();
        });
      }
    });
  }
  //add place modal
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
  //update place with modal
  open2(content: any, place: any) {
    this.Form.patchValue({
      name: place.name,
      _id: place._id,
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
