import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormControlState, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  formData: FormGroup;

  constructor(private authService: AuthService, private router: Router) {

    this.userName = '';
    this.password = '';
    this.formData = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });

  }

  ngOnInit() {
    this.formData = new FormGroup({
      userName: new FormControl("admin@test.com"),
      password: new FormControl("admin"),
    });
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    console.log("Login page: " + this.userName);
    console.log("Login page: " + this.password);

    this.authService.login(this.userName, this.password)
      .subscribe((data: string) => {
        console.log("Is Login Success: " + data);
        
        if (data) 
          this.router.navigate(['/']);
      });
  }
}


