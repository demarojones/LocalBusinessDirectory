import { Component } from "@angular/core";
import { NavController, AlertController, ToastController } from "ionic-angular";
import { LoginPage } from "../login/login";
import firebase, { database } from "firebase";
import { FeaturedPage } from "../featured/featured";

@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  constructor(
    public navCtrl: NavController,
    public toast: ToastController,
    public alert: AlertController
  ) {}

  signUp() {
    console.log(this.email, this.password);
    let pwdConfirmed: boolean = this.password === this.confirmPassword;
    if (pwdConfirmed) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.toast
            .create({
              message: "Welcome " + data.user.displayName,
              duration: 3000
            })
            .present();
          let newUser: firebase.User = data.user;
          newUser
            .updateProfile({
              displayName: this.firstName + " " + this.lastName,
              photoURL: ""
            })
            .then(res => {
              console.log("Profile Created");
              this.alert
                .create({
                  title: "Account Created!",
                  message: "Your account was created successfully!",
                  buttons: [
                    {
                      text: "Ok",
                      handler: () => {
                        this.navCtrl.setRoot(FeaturedPage);
                      }
                    }
                  ]
                })
                .present();
            })
            .catch(err => {
              this.toast
                .create({
                  message: err.message,
                  duration: 3000
                })
                .present();
            });
        })
        .catch(err => {
          this.toast
            .create({
              message: err.message,
              duration: 3000
            })
            .present();
        });
    } else {
      console.log("Passwords Must Match!!");
    }
  }

  signIn() {
    this.navCtrl.pop();
  }
}
