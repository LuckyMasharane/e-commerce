import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  afAuth: any;

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
  console.log(email);
  
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // ...
  }).then(result =>{
    console.log("success");
    
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

}
