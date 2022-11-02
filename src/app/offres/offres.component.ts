import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { OffresService } from '../offres.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css'],
})
export class OffresComponent implements OnInit {
  listoffres: any;
  confirmed: any;
  notConfirmed: any;
  constructor(private offres: OffresService) {}

  ngOnInit(): void {
    this.getalloffres();      
    this.getnonConfirmed();
  }
  getalloffres() {
    this.offres.getalloffres().subscribe((res: any) => {
      this.listoffres = res['data'];
      console.log('list offres', this.listoffres);
    });
  }
  confirmOffre(offre: any) {
    this.offres.confirmoffre(offre._id).subscribe((res: any) => {
      this.confirmed = res['data'];

      Swal.fire('offre confirmed');
      this.getalloffres();
    });
  }
  getnonConfirmed() {
    this.offres.getalloffres().subscribe((res: any) => {
      this.notConfirmed = res['data'].filter(
        (item: any) => item.isConfirmed == false
      );

      console.log('list not confirmed list', this.notConfirmed);
    });
  }
}
