import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private auth: AuthenticationService,
    private route: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.auth.login(this.form.value).subscribe(
      (res: any) => {
        console.log('login', res);
        if (res.message === 'logged') {
          localStorage.setItem('userconnect', JSON.stringify(res.user)); //user:resultat dans backend//creation un objet item
          localStorage.setItem('token', res.token);
          localStorage.setItem('refreshtoken', res.refreshtoken);

          localStorage.setItem('state', '0');
          this.route.navigateByUrl('/home');
        }
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'user not found',
          text: 'email invalid',
          footer: 'password invalid',
        });
        console.log(err);
      }
    );
  }
}
