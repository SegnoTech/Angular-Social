import { Component, OnInit,ViewEncapsulation } from '@angular/core';
// import { HttpClient, HttpHeaders } from "@angular/common/http";


import '@firebase/auth';
import firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) {

  }

  ngOnInit(): void {
  }


  googleLogin(){
    var ggprovider = new firebase.auth.GoogleAuthProvider();
    ggprovider.addScope('profile');
    ggprovider.addScope('email');
    firebase
    .auth()
    .signInWithPopup(ggprovider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      var user:any = result.user;
      console.log(user, 'login userrrr')
      var dataa = {
          "social":'Google',
          "email":user.email,
          "first_name":user.displayName,
          "last_name":"",
          "social_id":user.uid,
          "device_id":"1222",
          "role":"Employer",
      }
    })
  }

  FacebookAuthLogin(){
    var fbprovider = new firebase.auth.FacebookAuthProvider();
    firebase
    .auth()
    .signInWithPopup(fbprovider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      var user:any = result.user;
      console.log(user, 'facebook login')
      var dataa = {
          "social":'Facebook',
          "email":user.email,
          "first_name":user.displayName,
          "last_name":"",
          "social_id":user.uid,
          "device_id":"1222",
          "role":"Employer",
      }
    })
  }

  TwitterAuthLogin(){
    let provider= new firebase.auth.TwitterAuthProvider();
    firebase
    .auth()
    .signInWithPopup(provider)
    .then((result:any) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      console.log(result,'all resulttttttttt')

      // The signed-in user info.
      var user = result.user;
      console.log(user, 'You have been successfully logged in!');

      var dataa = {
          "social":'Twitter',
          "email":user.email,
          "first_name":user.displayName,
          "last_name":"",
          "social_id":user.uid,
          "device_id":"1222",
          "role":"Employer",
      }
    })
  }

  GithubAuthLogin(){
    let provider= new firebase.auth.GithubAuthProvider();
    firebase
    .auth()
    .signInWithPopup(provider)
    .then((result:any) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      console.log(result,'all resulttttttttt')

      // The signed-in user info.
      var user = result.user;
      console.log(user, 'You have been successfully logged in!');

      var dataa = {
          "social":'Github',
          "email":user.email,
          "first_name":user.displayName,
          "last_name":"",
          "social_id":user.uid,
          "device_id":"1222",
          "role":"Employer",
      }
    })
  }

}
