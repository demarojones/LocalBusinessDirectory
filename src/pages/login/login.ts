import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import firebase, { database } from "firebase";
import { FeaturedPage } from '../featured/featured';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email: string = '';
  password: string = '';
  constructor(public navCtrl: NavController, public toast: ToastController) {

  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then((data) => {
      console.log(data);
      this.toast.create({
        message: 'Welcome '+ data.user.displayName,
        duration: 3000
      }).present();
      this.navCtrl.setRoot(FeaturedPage);
    }).catch((err) => {
      this.toast.create({
        message: err.message,
        duration: 3000
      }).present();
      console.log(err);
    });
  }

  signUp() {
    this.navCtrl.push(SignupPage);
  }
}
