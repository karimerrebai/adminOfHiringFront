import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ContractsService } from '../contracts.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css'],
})
export class ContractsComponent implements OnInit {
  contractsList: any;
  form: FormGroup;
  contract: any;
  closeResult = '';

  constructor(
    private contracts: ContractsService,
    private formbuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name: ['', Validators.required],
      _id: [null],
    });
    this.getallcontracts();
  }

  getallcontracts() {
    this.contracts.getallcontracts().subscribe((res: any) => {
      this.contractsList = res['data'];
      console.log('list contracts', this.contractsList);
    });
  }

  deletele(id: any) {
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
        this.contracts.deletecontracts(id).subscribe((res: any) => {
          Swal.fire('Deleted!', 'Your Category has been deleted.', 'success');
          this.getallcontracts();
        });
      }
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

  addContract() {
    this.contracts.addContract(this.form.value).subscribe((res: any) => {
      Swal.fire('contract created');
      this.getallcontracts();
    });
  }
  updateContract() {
    this.contracts
      .updateContract(this.form.value._id, this.form.value)
      .subscribe((res: any) => {
        Swal.fire('contract updated');
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
  open2(content: any, contract: any) {
    this.form.patchValue({
      name: contract.name,
      _id: contract._id,
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
