import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  listStudents: Array<any> = [];

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required)
  });
  constructor(private authServices: AuthService, private socialService: SocialAuthService, private loginservices: AuthService) { }
  data: any;
  ngOnInit(): void {

  }
  submitForm() {
    console.log(this.loginForm.value);
    return false
  }
  googleLogin() {
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(resp => {
        this.authServices.login(resp.email, resp.id, resp.name, resp.photoUrl)
          .subscribe(data => {
            this.data = data

          })
      })
  }

}
