import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import {
  validateEmailandPassword,
  validateEmail,
  validatePassword,
} from 'app-utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  validEmail!: boolean;
  validPassword!: boolean;

  constructor(public auth: AngularFireAuth, public router: Router) {}

  ngOnInit(): void {}

  async onEmailChange(email: string) {
    const isValidEmail = await validateEmail(email);
    if (isValidEmail) {
      this.validEmail = true;
      this.email = email;
    } else {
      this.validEmail = false;
    }
  }

  async onPasswordChange(password: string) {
    const isValidPassword = await validatePassword(password);
    if (isValidPassword) {
      this.validPassword = true;
      this.password = password;
    } else {
      this.validPassword = false;
    }
  }

  loginWithGoogle() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        if (response.operationType === 'signIn') {
          localStorage.setItem('status', 'loggedIn');
          this.router.navigate(['browse']);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  async loginWithEmailAndPassword() {
    if (!this.email) {
      this.validEmail = false;
    }
    if (!this.password) {
      this.validPassword = false;
    }
    const isValid = await validateEmailandPassword(this.email, this.password);
    if (isValid) {
      this.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          if (response.operationType === 'signIn') {
            localStorage.setItem('status', 'loggedIn');
            this.router.navigate(['browse']);
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
}
