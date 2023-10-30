import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
import Swal from "sweetalert2";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

  loginFormSubmitted = false;
  isLoginFailed = false;
  returnUrl: any;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(true)
  });


  constructor(private router: Router, private authService: AuthService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute) {

    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    if (this.authService.currentUserValue) {
      this.router.navigate(["../../../page"]);
    }

  }

  get lf() {
    return this.loginForm.controls;
  }

  // On submit button click
  onSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log('Login');
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgb(236, 17, 26)',
        color: '#fff',
        fullScreen: true
      });
      setTimeout(() => {
          this.spinner.hide();
          this.router.navigate(["../../../page"]);
      }, 5000);
          

    // this.authService
    // .signinUser(this.loginForm.value.username, this.loginForm.value.password)
    // .pipe(first())
    // .subscribe(
    //   (data) => {
    //     console.log(data);
    //     if (!data.error) {
    //       this.spinner.hide();
    //       this.router.navigate(["../../../page"]);
    //     } else {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Error",
    //         text: data.mensaje,
    //       });
    //       this.spinner.hide();
    //     }
    //   },
    //   (error) => {}
    // );
  }

}
