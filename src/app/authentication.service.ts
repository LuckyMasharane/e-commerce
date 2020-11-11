import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private db: AngularFirestore) { }

  signUpUser(user){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  }).then( results =>{
    console.log("successfull");
    
  });
}

signInUser(email,password){
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  }).then(result =>{
    console.log("success");
    
  });
}

removingUser(){}

forgotPassword(){}

}
