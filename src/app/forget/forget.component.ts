import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ForgetService } from '../forget.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css'],
})
export class ForgetComponent implements OnInit {
  form: FormGroup;
  forgetPassword: any;
  email: any;
  constructor(
    private frogetService: ForgetService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: ['', Validators.required],
    });
  }

  forgetpassword() {
    this.frogetService.forgetPassword(this.form.value).subscribe((res: any) => {
      this.email = res;
      Swal.fire('please check your email');
      console.log(this.email);
      this.router.navigateByUrl('/');
    });
    if (!this.email) {
      Swal.fire('email invalid');
    }
  }
}
