import { Component, OnInit } from '@angular/core';
import { IncidenteInterface } from '../../models/incidente';
import { IncidenciaService } from "../../services/incidencia.service";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-registrar-incidencia',
  templateUrl: './registrar-incidencia.component.html',
  styleUrls: ['./registrar-incidencia.component.css']
})
export class RegistrarIncidenciaComponent implements OnInit {
public nombreEquipo="";
  constructor(private activatedRoute: ActivatedRoute
    ,private incidenciaService: IncidenciaService, private router: Router) {
      this.incidenciaService.codActualEquipo.subscribe(message => this.nombreEquipo = message)
     }

  ngOnInit(): void {
  }
   public postIncidencia = new FormGroup({
    fecha: new FormControl('', Validators.required),
    descripcion: new FormControl(),
    codDocente: new FormControl('', Validators.required),
    codEquipo: new FormControl(''),
    
  });
 agregarIncidencia(incidente:IncidenteInterface){
  	//
      incidente.codEquipo=this.nombreEquipo;
      incidente.fecha=this.convertDateFormat(incidente.fecha);
      console.log("incidencia",incidente);
  	 this.incidenciaService.agregarIncidencia(incidente).subscribe((result) => {
      this.router.navigate(['/asignar-carga']);
    }, (err) => {
      console.log(err);
    });
  }
 convertDateFormat(string) {
  var info = string.split('-');
  return info[0] + '-' + info[1] + '-' + info[2];
}
getEquipo(){
       this.router.navigate(['equipo/seleccionar-equipo/2']); //opcion de componente 
  }
}
