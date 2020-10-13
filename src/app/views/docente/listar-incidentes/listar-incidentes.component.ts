import { Component, OnInit } from '@angular/core';
import { IncidenteInterface } from '../../../models/incidente';
import { IncidenciaService } from "../../../services/incidencia.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-incidentes',
  templateUrl: './listar-incidentes.component.html',
  styleUrls: ['./listar-incidentes.component.css']
})
export class ListarIncidentesComponent implements OnInit {
constructor(private activatedRoute: ActivatedRoute,private incidenciaService: IncidenciaService,
  				private formBuilder: FormBuilder, private router: Router) { }

 Incidencias: any = [];
  ngOnInit(): void {
    
    this.cargarIncidencias();

  }

  cargarIncidencias() {
  	
    return this.incidenciaService.getIncidencias().subscribe((data: {}) => {
    	//console.log("load",data);
      this.Incidencias = data;
    })
  }
  borrarIncidencia(incidencia:IncidenteInterface) {
    
    return this.incidenciaService.borrarIncidencia(incidencia.codIncidente).subscribe(res => {
         this.Incidencias = this.Incidencias.filter(item => item.codIncidente !== incidencia.codIncidente);
         console.log('Post deleted successfully!');
    })
  }
  incidenciaDetalles(incidencia:IncidenteInterface){
      this.router.navigate(['docente/incidente/editar/'+incidencia.codIncidente]);  
  }
  agregarIncidencia(){
    
      this.router.navigate(['docente/incidente/insertar']);  
  }
}
