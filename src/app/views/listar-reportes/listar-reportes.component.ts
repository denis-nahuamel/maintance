import { Component, OnInit } from '@angular/core';
import { IncidenteInterface } from '../../models/incidente';
import { IncidenciaService } from "../../services/incidencia.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { DocenteInterface } from "../../models/docente";
import { DocentesService } from "../../services/docentes.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-listar-reportes',
  templateUrl: './listar-reportes.component.html',
  styleUrls: ['./listar-reportes.component.css']
})
export class ListarReportesComponent implements OnInit {

constructor(private activatedRoute: ActivatedRoute,private incidenciaService: IncidenciaService,
  				private formBuilder: FormBuilder, private router: Router, private docenteService: DocentesService) { }

 Incidencias: any = [];
 Tareas:any=[];
 IncidenciasBackup: any = [];
 Docentes:any=[];
 opcionSeleccionado: string  = '0';
  docenteSeleccionado: string        = '';
  fechaInicio:any;
  fechaFin:any;
  ngOnInit(): void {

    this.cargarIncidencias();
 this.docenteService.getDocentes()
        .subscribe(docentes => {

          this.Docentes=docentes;
        });
  }
 capturar() {
      this.docenteSeleccionado = this.opcionSeleccionado;
      console.log(this.docenteSeleccionado);
  }
  cargarIncidencias() {

    return this.incidenciaService.getIncidencias().subscribe((data: {}) => {
      this.Incidencias = data;
      this.IncidenciasBackup=data;
    })
  }
  cargarTareas() {

    return this.incidenciaService.getTareas().subscribe((data: {}) => {
      this.Tareas = data;
     // this.IncidenciasBackup=data;
    })
  }
  listarTareas(){
    this.Incidencias=this.IncidenciasBackup;
    this.Incidencias = this.Incidencias.filter(item =>
      item.fecha >this.fechaInicio &&
      item.fecha<this.fechaFin &&
      item.codDocente==this.docenteSeleccionado );
  }
}
