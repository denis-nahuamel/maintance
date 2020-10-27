import { Component, OnInit } from '@angular/core';
import { EquipoInterface } from '../../models/equipo';
import { EquiposService } from "../../services/equipos.service";
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { IncidenciaService } from "../../services/incidencia.service";

@Component({
  selector: 'app-equipo-incidente',
  templateUrl: './equipo-incidente.component.html',
  styleUrls: ['./equipo-incidente.component.css']
})
export class EquipoIncidenteComponent implements OnInit {
  public codIncidente=null;
  Equipo:any;
 public formDetalles = new FormGroup({
    fechaLimite: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    laboratorio: new FormControl('', Validators.required),
    equipo: new FormControl(''),

  });
  constructor(private activatedRoute: ActivatedRoute,private equiposService: EquiposService
    , private router: Router,private incidenteService: IncidenciaService) { }


  ngOnInit(): void {
    this.codIncidente = this.activatedRoute.snapshot.paramMap.get('id');//i
    this.obtenerInforme();
  }
   obtenerInforme(){
      this.incidenteService.obtenerInforme(this.codIncidente).subscribe((data: {}) => {
    	console.log("load",data);
      this.Equipo = data;
    });
  }
irMantenimiento(){
  	   this.router.navigate(['equipos-asignados/'+this.codIncidente+'/mantenimiento']);//equipo-mantenimiento
  }
}
