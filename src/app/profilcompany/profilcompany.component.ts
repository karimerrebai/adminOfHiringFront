import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-profilcompany',
  templateUrl: './profilcompany.component.html',
  styleUrls: ['./profilcompany.component.css'],
})
export class ProfilcompanyComponent implements OnInit {
  id = this.activeroute.snapshot.params['id'];
  company: any;
  date = new Date().toISOString().split('T')[0].toString();

  constructor(
    private activeroute: ActivatedRoute,
    private companies: CompaniesService
  ) {}

  ngOnInit(): void {
    console.log('id:', this.id);

    this.getcompany();
  }

  getcompany() {
    this.companies.getCompanybyid(this.id).subscribe((res: any) => {
      this.company = res['data'];
      console.log(this.company, 'id');
    });
  }
}
