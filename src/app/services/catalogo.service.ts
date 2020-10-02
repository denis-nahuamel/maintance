import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { CatalogoInterface } from '../models/catalogo';

import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
apiURL = 'http://localhost:3000/catalogo';
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  public nombreRepuesto="";
   public Catalogos: Observable<CatalogoInterface[]>;
    constructor(private http: HttpClient) { }
 //============recibir mensaje==============
 private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

 changeMessage(message: string) {
    this.messageSource.next(message)
  } 
  //=============obtener los datos de catalogo==============
getCatalogos(): Observable<any>  {
	
    return this.http.get(this.apiURL).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
//======================Obtener un solo catalogo===============================
 getCatalogo(id:string): Observable<any>  {
  
    return this.http.get(this.apiURL+'/editar/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  //===================agregar catalogo=====================
  agregarCatalogo(catalogo: CatalogoInterface): Observable<any> {
    console.log(catalogo+"sss");
    return this.http.post<CatalogoInterface>(this.apiURL+'/insertar', catalogo).pipe(
       catchError(this.handleError)
    );
  }
//===================actualizar catalogo=====================
  actualizarCatalogo(idCatalogo, catalogo): Observable<any> {
   console.log(this.apiURL+'/editar/'+idCatalogo);
    return this.http.put<CatalogoInterface>(this.apiURL+'/editar/'+idCatalogo, JSON.stringify(catalogo),this.httpOptions).pipe(

     catchError(this.handleError)
    );
  }
//===================borrar catalogo=====================
  borrarCatalogo(id) {
  
    return this.http.delete<CatalogoInterface>(this.apiURL+'/eliminar/'+id).pipe(
      catchError(this.errorHandler)
    )
  }
   private extractData(res: Response): any {
    const body = res;
    return body || { };
  }
errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
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
