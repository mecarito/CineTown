import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

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

  ngOnInit(): void {
    this.validEmail = true;
    this.validPassword = true;
  }

  onEmailChange(value: string) {
    if (!value) {
      this.validEmail = false;
    } else {
      this.validEmail = true;
    }
    this.email = value;
  }

  onPasswordChange(value: string) {
    if (!value) {
      this.validPassword = false;
    } else {
      this.validPassword = true;
    }
    this.password = value;
  }

  async loginWithGoogle() {
    // const response = await this.auth.signInWithPopup(
    //   new firebase.auth.GoogleAuthProvider()
    // );
    // if (response.operationType === 'signIn') {
    //   this.router.navigate(['dashboard']);
    // }
  }

  async loginWithEmailAndPassword() {
    if (!this.email) {
      this.validEmail = false;
    }
    if (!this.password) {
      this.validPassword = false;
    }
    if (this.email && this.password) {
      console.log(this.email, this.password);
    }

    // const response = await this.auth.signInWithEmailAndPassword(
    //   this.email.value as string,
    //   this.password.value as string
    // );
    // if (response.operationType === 'signIn') {
    //   this.router.navigate(['dashboard']);
    // }
  }
}
