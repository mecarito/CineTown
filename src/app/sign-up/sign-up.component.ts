import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(public auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async signUpWithGoogle() {
    const user = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    console.log( user )
  }

  async singUpWithEmailAndPassword(){
    
  }
}
