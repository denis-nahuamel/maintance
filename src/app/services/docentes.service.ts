import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { DocenteInterface } from '../models/docente';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {
apiURL = 'https://api.chucknorris.io/jokes';
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
   public Docente: Observable<DocenteInterface[]>;
  

constructor(private http: HttpClient) { }
  
getDocentesAsignados(id:string): Observable<any>  {
	
    return this.http.get('https://jsonplaceholder.typicode.com/todos/').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
    agregarDocente(docente: any): Observable<any> {
    return this.http.post(this.apiURL + 'incidencia', docente).pipe(
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
