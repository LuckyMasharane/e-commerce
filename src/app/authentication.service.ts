import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  afAuth: any;

  user: User;
  userInfo;

  constructor(private db: AngularFirestore) {

    // this.afAuth.authState.switchMap(auth => {
    //   if (auth) {
    //     this.currentUser = auth
    //     return this.db.collection(`/users/${auth.uid}`)
    //   } else return [];
    // })
    // .subscribe(user => {
    //     this.currentUser['username'] = user.username
    // });

  }

  signUpUser(user) {
    let message = "";

    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      message = errorMessage;
      console.log(errorMessage);
    }).then(results => {
      console.log(results);
      console.log(user);

      if (results) {
        message = "successfully registered";

        firebase.database().ref('users/' + results.user.uid).set({

          firstName: user.firstName,
          email: user.email,
          lastName: user.lastName,
          password: user.password
        });
        console.log(message);

      } else {

      }
    });
  }

  signInUser(email, password) {
    let user: any;
    let message: "";

    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      message = errorMessage
      console.log(message);
      // ...
    }).then(result => {
      user = result;

      if (user) {
        console.log(user.user.email + " Successfully logged in");
      } else {
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

  // removingUser(){
  //   return this.db.collection("Users").doc(firebase.auth().currentUser.uid).delete()
  // }
  // isLoggedIn() {
  //   this.afAuth.auth.onAuthStateChanged(auth => {
  //     if (auth) {
  //       console.log(auth);
  //     } else {
  //       console.log('User logged out');
  //     }
  //   });
  // }

  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth.sendPasswordResetEmail(email)
      .then(() => console.log('sent Password Reset Email!'))
      .catch((error) => console.log(error))
  }

  forgotPassword() { }

  getCurrentUser() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var userId = user.uid;
        firebase.database().ref('/users/' + userId).once('value').then(userProfile => {
          this.userInfo = new User(userProfile.val().firstName, userProfile.val().lastName, userProfile.val().email)
          console.log(this.userInfo);
          // return userInfo
        })
      } else {
        console.log("user not logged in");

      }
    });
  }

  logout() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
    }).catch(function (error) {
      console.log(error);

    });
  }

}
