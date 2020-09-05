import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('loginButton') Loginbutton: ElementRef;
  @ViewChild('email') emailField: ElementRef;
  @ViewChild('password') passwordField: ElementRef;

  constructor(private http: HttpClient) { }

  response = {}
  showStatus = 'Show'

  ngOnInit(): void {
  }

  changeInputType(input: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
    if (input.type === 'password') { this.showStatus = "Show" } else { this.showStatus = "Hide" }
  }

  validateFields() {
    let email = this.emailField.nativeElement
    let password = this.passwordField.nativeElement

    if (email.value != "" && password.value != "") {
      this.Loginbutton.nativeElement.disabled = false
    } else {
      this.Loginbutton.nativeElement.disabled = true
    }

  }

  getLoginInfo(loginData) {
    console.log(loginData)
    this.http.post(
      'http://localhost:5000/login',
      loginData,
      { responseType: 'json' }
    ).toPromise()
      .then(
        res => {
          this.response = res
          if (this.response['url'] != undefined) {
            setTimeout(() => { window.location.href = this.response['url'] }, 2000)
          }
        })
      .catch(error => console.error(error))
  }

}
