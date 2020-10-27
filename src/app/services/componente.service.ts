import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { ComponenteInterface } from '../models/componente';

import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ComponenteService {
apiURL = 'https://projectlab6.herokuapp.com/componente';
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   public Componente: Observable<ComponenteInterface[]>;


 private codEquipoMensaje = new BehaviorSubject('');
  codActualEquipo=this.codEquipoMensaje.asObservable();
  codEquipo(message: string) {
    this.codEquipoMensaje.next(message)
  }


private messageSource = new BehaviorSubject('');
   currentMessage = this.messageSource.asObservable();

 changeMessage(message: string) {
    this.messageSource.next(message)
  }
//=================nombre componente malogrado============
  private mensajeComponente = new BehaviorSubject('');
   nombreComponenteActual = this.mensajeComponente.asObservable();

 cambiarNombreComponente(message: string) {
    this.mensajeComponente.next(message)
  }


constructor(private http: HttpClient) { }

getComponentesAsignados(id:string): Observable<any>  {

    return this.http.get('https://jsonplaceholder.typicode.com/todos/').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  //===================================================
   getComponentes(): Observable<any>  {

    return this.http.get(this.apiURL).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
//======================Obtener un solo componente===============================
 getComponente(id:string): Observable<any>  {

    return this.http.get(this.apiURL+'/editar/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  //===================agregar componente=====================
  agregarComponente(componente: ComponenteInterface): Observable<any> {
    console.log(componente+"sss");
    return this.http.post<ComponenteInterface>(this.apiURL+'/insertar', componente).pipe(
       catchError(this.handleError)
    );
  }
//===================actualizar componente=====================
  actualizarComponente(idComponente, componente): Observable<any> {
   console.log(this.apiURL+'/editar/'+idComponente);
    return this.http.put<ComponenteInterface>(this.apiURL+'/editar/'+idComponente, JSON.stringify(componente),this.httpOptions).pipe(

     catchError(this.handleError)
    );
  }
//===================borrar componente=====================
  borrarComponente(id) {

    return this.http.delete<ComponenteInterface>(this.apiURL+'/eliminar/'+id).pipe(
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
