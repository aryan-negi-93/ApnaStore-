// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: ServiceService, private router: Router) { }

  loginForm = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  login() {
    if (this.loginForm.valid) {
      const id = this.loginForm.value.id;
      const password = this.loginForm.value.password;
      const loginData = { id, password };
      this.service.loginData(loginData).subscribe(
        (response) => {
          localStorage.setItem('userData', JSON.stringify(response));
          this.router.navigate(['']);
        },
        (error) => {
          this.toastr.error(error.error.msg || 'An error occurred during login.');
        }
      );
    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }

}




