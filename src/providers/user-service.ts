import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private user: User;
  constructor() {
    
  }

  static getInstance() {
    return this;
  }

  static getCurrentUser() {
    return new User();
  }

  isLoggedInViaFacebook() {
    return this.user.authData;
  }

  signUp(data: any = {}): Promise<User> {
    return new Promise((resolve, reject) => {
      let user = new User();
      
    });
  }

  signIn(data: any = {}): Promise<User> {
    return new Promise((resolve, reject) => {
      let user = new User;
      user.username = data.username;
      user.password = data.password;
    });
  }

  logout() {

    return new Promise((resolve, reject) => {

      Parse.User.logOut().then(success => {
        resolve(success);
      }, error => {
        reject(error);
      });
    });
  }

  recoverPassword(email) {
    return new Promise((resolve, reject) => {

      
    });
  }

  loginWithFacebook(authData): Promise<User> {

    return new Promise((resolve, reject) => {
      let user: any = new User;
    });
  }

  isFacebookLinked(): boolean {
    return null;
  }

  linkFacebook(authData): Promise<any> {
    return new Promise((resolve, reject) => {
      null
    });
  }

  unlinkFacebook(): Promise<any> {
    return new Promise((resolve, reject) => {
      
    });
  }
}
