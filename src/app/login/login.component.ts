import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  constructor(public auth: AngularFireAuth, public router: Router) {}

  ngOnInit(): void {}

  async loginWithGoogle() {
    const response = await this.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );

    if (response.operationType === 'signIn') {
      this.router.navigate(['dashboard']);
    }
  }

  async loginWithEmailAndPassword() {
    const response = await this.auth.signInWithEmailAndPassword(
      this.email.value as string,
      this.password.value as string
    );
    if (response.operationType === 'signIn') {
      this.router.navigate(['dashboard']);
    }
  }
}
