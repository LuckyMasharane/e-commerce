import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  afAuth: any;

  user:any;

  constructor( private db: AngularFirestore) { }

  signUpUser(user){
    let message:any;
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    message = errorMessage;
    console.log(errorMessage);
  }).then( results =>{
    user = results
      if(user){
        console.log("successfull");
      }else{
        console.log(message)
      }
    
  });
}

signInUser(email,password){
  let user:any;
  let message:any;
  
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    message= errorMessage
    console.log(message);
    // ...
  }).then(result =>{
    user = result;

    if(user){
      console.log(user.user.email + " Successfully logged in");
    }else{
      console.log(message)
    }
    return user.user.email;
  });
}

// var user = firebase.auth().currentUser;
// var newPassword = getASecureRandomPassword();
// user.updatePassword(newPassword).then(function() {
//   // Update successful.
// }).catch(function(error) {
//   // An error happened.
// });

removingUser(){}

resetPassword(email: string) {
  const fbAuth = firebase.auth();

  return fbAuth.sendPasswordResetEmail(email)
    .then(() => console.log('sent Password Reset Email!'))
    .catch((error) => console.log(error))
}

forgotPassword(){
  
}

logout(){
  firebase.auth().signOut().then(()  =>{
    // Sign-out successful.
    console.log("Sign-out successful.");
    
  }).catch(function(error) {
    console.log(error);
    
  });
}

}
