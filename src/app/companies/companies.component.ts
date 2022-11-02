import { Component, OnInit } from '@angular/core';
import { filter, zip } from 'rxjs';
import Swal from 'sweetalert2';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  companies: any;
  approved: any;

  constructor(private companyService: CompaniesService) {}

  ngOnInit(): void {
    this.getcompanies();
    this.getApproved();
  }

  getcompanies() {
    this.companyService.getAllCompanies().subscribe((res: any) => {
      this.companies = res['data'];
      console.log('list companies', this.companies);
    });
  }

  deletecompany(id: any) {
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
        this.companyService.deleteCompany(id).subscribe((res: any) => {
          Swal.fire('Deleted!', 'Your Category has been deleted.', 'success');
          this.getcompanies();
        });
      }
    });
  }

  confirmCompany(company: any) {
    if (company.confirmed == true) {
      Swal.fire('company is already confirmed');
    } else {
      this.companyService.confirmCompany(company._id).subscribe((res: any) => {
        console.log('confirmed', res);

        Swal.fire('Copany approved successfully! ');
      });
    }
  }

  getApproved() {
    this.companyService.getAllCompanies().subscribe((res: any) => {
      this.approved = res['data'].filter((el: any) => el.confirmed == true);
      console.log('list approved', this.approved);
    });
  }
}
