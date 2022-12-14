import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email!: string;
  password!: string;

  validEmail!: boolean;
  validPassword!: boolean;

  constructor(public auth: AngularFireAuth, public router: Router) {}

  onEmailChange(value: string) {
    // TODO: validation logic
    if (!value) {
      this.validEmail = false;
    } else {
      this.validEmail = true;
    }
    this.email = value;
  }

  onPasswordChange(value: string) {
    // TODO: validation logic
    if (!value) {
      this.validPassword = false;
    } else {
      this.validPassword = true;
    }
    this.password = value;
  }

  ngOnInit(): void {}

  async signUpWithGoogle() {
    // const response = await this.auth.signInWithPopup(
    //   new firebase.auth.GoogleAuthProvider()
    // );
    // if (response.operationType === 'signIn') {
    //   this.router.navigate(['dashboard']);
    // }
  }

  async singUpWithEmailAndPassword() {
    if (!this.email) {
      this.validEmail = false;
    }
    if (!this.password) {
      this.validPassword = false;
    }
    if (this.email && this.password) {
      console.log(this.email, this.password);
    }
    // const response = await this.auth.createUserWithEmailAndPassword(
    //   this.email.value as string,
    //   this.password.value as string
    // );

    // if (response.operationType === 'signIn') {
    //   this.router.navigate(['dashboard']);
    // }
  }
}
