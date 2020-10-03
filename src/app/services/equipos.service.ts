import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { EquipoInterface } from '../models/equipo';

import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EquiposService {
apiURL = 'http://localhost:3000/equipo';
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
   public Equipo: Observable<EquipoInterface[]>;
  
 private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
 changeMessage(message: string) {
  
    this.messageSource.next(message)
  }  
constructor(private http: HttpClient) { }
  
getEquiposAsignados(id:string): Observable<any>  {
	
    return this.http.get(this.apiURL).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
   //=============obtener los datos de equipo==============
getEquipos(): Observable<any>  {
  
    return this.http.get(this.apiURL).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
//======================Obtener un solo equipo===============================
 getEquipo(id:string): Observable<any>  {
  
    return this.http.get(this.apiURL+'/editar/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  //===================agregar equipo=====================
  agregarEquipo(equipo: EquipoInterface): Observable<EquipoInterface> {
    return this.http.post<EquipoInterface>(this.apiURL+'/insertar', equipo).pipe(
     
    );
  }
//===================actualizar equipo=====================
  actualizarEquipo(id,equipo ): Observable<any> {
    return this.http.put<EquipoInterface>(this.apiURL+'/editar/'+id, equipo).pipe(
          catchError(this.handleError)
      );
  }
//===================borrar equipo=====================
  borrarEquipo(id): Observable<EquipoInterface> {
    return this.http.delete<EquipoInterface>(this.apiURL+'/eliminar/'+id).pipe(

          catchError(this.errorHandler)
    );
  }
  //=======================================================

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
