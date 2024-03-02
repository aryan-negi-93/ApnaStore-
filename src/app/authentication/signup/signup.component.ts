import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: ServiceService, private router: Router) { }

  registerForm = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('')])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
  })


  registration() {
    if (this.registerForm.valid) {
      this.service.registerData(this.registerForm.value).subscribe(
        () => {
          this.toastr.success( 'Registration successful');
          this.router.navigate(['login']);
        },
        error => {
          this.toastr.error(error.error.msg, 'Registration failed');
        }
      );
    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }
}


