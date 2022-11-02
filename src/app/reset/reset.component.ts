import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ForgetService } from '../forget.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
})
export class ResetComponent implements OnInit {
  form: FormGroup;

  constructor(
    private activeroute: ActivatedRoute,
    private reset: ForgetService,
    private formBuil: FormBuilder,
    private route: Router
  ) {}

  token = this.activeroute.snapshot.params['token'];

  ngOnInit(): void {
    this.form = this.formBuil.group({
      password: ['', Validators.required],
    });
  }

  resetpassword() {
    this.reset
      .resetpassword(this.token, this.form.value)
      .subscribe((res: any) => {
        Swal.fire('password has been changed !! ');
        this.route.navigateByUrl('/');
        console.log('changed', res);
      });
  }
}
