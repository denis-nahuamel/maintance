import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { IncidenteInterface } from "../models/incidente";

import { Observable, throwError, BehaviorSubject } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class IncidenciaService {
  apiURL = "https://projectlab6.herokuapp.com/incidente/";
  apiInforme = "https://projectlab6.herokuapp.com/informe/";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  public Incidencias: Observable<IncidenteInterface[]>;

  private codEquipoMensaje = new BehaviorSubject("");
  codActualEquipo = this.codEquipoMensaje.asObservable();
  codEquipo(message: string) {
    this.codEquipoMensaje.next(message);
  }
  constructor(private http: HttpClient) {
    this.Incidencias = null;
  }

  //===================obtener incidencias para un tecnico================
  getIncidencias(): Observable<any> {
    return (this.Incidencias = this.http.get(this.apiURL).pipe(
      map(this.extractData),
      catchError(this.handleError)
    ));
  }


  //==============obtener una unica incidencia==========================
  getIncidencia(id: string): Observable<any> {
    return this.http.get(this.apiURL + "/editar/" + id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  //================agregar incidencia===========================
  agregarIncidencia(incidencia: any): Observable<any> {
    return this.http
      .post<IncidenteInterface>(this.apiURL + "/insertar", incidencia)
      .pipe(catchError(this.handleError));
  }
  //===================actualizar incidencia	=====================
  actualizarIncidencia(idIncidencia, incidencia): Observable<any> {
    console.log(this.apiURL + "/editar/" + idIncidencia);
    return this.http
      .put<IncidenteInterface>(
        this.apiURL + "/editar/" + idIncidencia,
        JSON.stringify(incidencia),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }
  //===================borrar incidencia	=====================
  borrarIncidencia(id) {
    return this.http
      .delete<IncidenteInterface>(this.apiURL + "/eliminar/" + id)
      .pipe(catchError(this.errorHandler));
  }

  //==============obtenerTarea===========================
  obtenerInforme(id:string): Observable<any>  {

    return this.http.get(this.apiInforme+'/editar/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }





  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }
  errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }
}
