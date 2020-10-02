import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
public email: string = '';
  public contra: string = '';
constructor(
    private router: Router, private authService: AuthService,
    /* private authGuard: AuthGuard*/) { }
  
  ngOnInit() {
  }

  onLogin(): void {
   // this.authService.loginEmailUser(this.email, this.contra)
     /* .then((res) => {
        //console.log(this.authService.currentUser.uid);
        
          
       
      }).catch(err => console.log('err', err.message));*/
       this.onLoginRedirect();
  }
   onLoginRedirect(): void {

   	 this.router.navigate(['asignar-carga']);
   }
}
