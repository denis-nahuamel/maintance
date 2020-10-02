import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loginEmailUser(email: string, contra: string) {
   /* return new Promise((resolve, reject) => {
      this.afsAuth.signInWithEmailAndPassword(email, contra)
        .then(userData => resolve(userData),
        err => reject(err));
    });*/
  }

}
