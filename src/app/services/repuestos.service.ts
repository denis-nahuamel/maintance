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
apiURL = 'https://projectlab6.herokuapp.com/informe/componentesAlmacen/';
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public nombreRepuesto="";
   public Repuesto: Observable<RepuestoInterface[]>;

 private messageSource = new BehaviorSubject<any>("");
  currentMessage = this.messageSource.asObservable();
 constructor(private http: HttpClient) { }
 changeMessage(message) {

    this.messageSource.next(message)
  }
getRepuestos(): Observable<any>  {

    return this.http.get(this.apiURL).pipe(
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
