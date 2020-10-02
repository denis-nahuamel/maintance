import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { RepuestoInterface } from '../models/repuesto';

import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepuestosService {
apiURL = 'https://api.chucknorris.io/jokes';
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  public nombreRepuesto="";
   public Repuesto: Observable<RepuestoInterface[]>;
  
 private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
 constructor(private http: HttpClient) { }
 changeMessage(message: string) {
  
    this.messageSource.next(message)
  } 
getRepuestos(): Observable<any>  {
	
    return this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

   private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
