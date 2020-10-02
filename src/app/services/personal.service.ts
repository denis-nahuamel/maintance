import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { PersonalInterface } from '../models/personal';
import { ProductoInterface } from '../models/producto';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
 apiURL = 'https://api.chucknorris.io/jokes';
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
   public Tecnico: Observable<PersonalInterface[]>;
   public Producto: Observable<ProductoInterface[]>;

constructor(private http: HttpClient) { this.Producto=null; }
  

  getProducto(): Observable<any> {
	
    return this.Producto= this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getTecnico(id:string): Observable<any>  {
	
    return this.http.get('https://jsonplaceholder.typicode.com/todos/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
   asignarCarga(product: any): Observable<any> {
    return this.http.post(this.apiURL + 'products', product).pipe(
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
