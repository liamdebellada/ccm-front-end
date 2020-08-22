import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor() { }

  err = ""

  ngOnInit(): void {
  }

  changeInputType(input: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
  }


  getLoginInfo(loginData) {
    this.err = loginData['email'] //return errors here using this.err
  }
}
