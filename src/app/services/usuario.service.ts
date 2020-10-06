import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { UsuarioInterface } from '../models/usuario';

import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
apiURL = 'https://projectlab6.herokuapp.com/usuario';
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
   public Usuario: Observable<UsuarioInterface[]>;
 

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
  

constructor(private http: HttpClient) { }
  
getUsuariosAsignados(id:string): Observable<any>  {
	
    return this.http.get(this.apiURL).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  //===================================================
   getUsuarios(): Observable<any>  {
  
    return this.http.get(this.apiURL).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
//======================Obtener un solo usuario===============================
 getUsuario(id:string): Observable<any>  {
  
    return this.http.get(this.apiURL+'/editar/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  //===================agregar usuario=====================
  agregarUsuario(usuario: UsuarioInterface): Observable<any> {
    console.log(usuario+"sss");
    return this.http.post<UsuarioInterface>(this.apiURL+'/insertar', usuario).pipe(
       catchError(this.handleError)
    );
  }
//===================actualizar usuario=====================
  actualizarUsuario(idUsuario, usuario): Observable<any> {
   console.log(this.apiURL+'/editar/'+idUsuario);
    return this.http.put<UsuarioInterface>(this.apiURL+'/editar/'+idUsuario, JSON.stringify(usuario),this.httpOptions).pipe(

     catchError(this.handleError)
    );
  }
//===================borrar usuario=====================
  borrarUsuario(id) {
  
    return this.http.delete<UsuarioInterface>(this.apiURL+'/eliminar/'+id).pipe(
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
