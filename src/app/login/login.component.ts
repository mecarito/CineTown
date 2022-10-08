import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth) { 

  }

  ngOnInit(): void {
  }

  async loginWithGoogle() {
    const user = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    console.log( user )
  }

}
