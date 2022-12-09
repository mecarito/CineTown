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

  email = new FormControl('');
  password = new FormControl('');

  constructor(public auth: AngularFireAuth, public router: Router) {}

  ngOnInit(): void {}

  async signUpWithGoogle() {
    const response = await this.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );

    if (response.operationType === 'signIn') {
      this.router.navigate(['dashboard']);
    }
  }

  async singUpWithEmailAndPassword() {
    const response = await this.auth.createUserWithEmailAndPassword(
      this.email.value as string,
      this.password.value as string
    );

    if (response.operationType === 'signIn') {
      this.router.navigate(['dashboard']);
    }
  }
}
