import { Component, OnInit } from '@angular/core';
import { PersonalInterface } from '../../models/personal';
import { RepuestosService } from "../../services/repuestos.service";
import { IncidenciaService } from "../../services/incidencia.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipo-mantenimiento',
  templateUrl: './equipo-mantenimiento.component.html',
  styleUrls: ['./equipo-mantenimiento.component.css']
})
export class EquipoMantenimientoComponent implements OnInit {
	public idIncidente=null;
  public componenteAlmacen="";//nombre del componente seleccionado
  message:any;
  Equipo:any;
  ComponenteAlmacen:any;//componente que se selecciono del almacen
  ComponenteEquipo:any;//componente del equipo que va a ser retirado
  constructor(private repuestosService:RepuestosService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router,private incidenteService: IncidenciaService) {

  }

  ngOnInit(): void {
     this.repuestosService.currentMessage.subscribe(message => this.ComponenteAlmacen= message)
    this.idIncidente = this.activatedRoute.snapshot.paramMap.get('id');//i
    this.componenteAlmacen=this.ComponenteAlmacen.catalogo
  }
  getIncidente(){
      this.incidenteService.obtenerInforme(this.idIncidente).subscribe((data: {}) => {
    	console.log("load",data);
      this.Equipo = data;
    });
  }
  //============obtener componente que va a ser reemplazado
  obtenerComponente(){
     this.router.navigate(['equipos-asignados/'+this.idIncidente+'/componentes']);//equipo-mantenimiento/equipo-componentes
  }
getRepuestos(){
  	   this.router.navigate(['equipos-asignados/'+this.idIncidente+'/repuestos']);//repuestos
  }
}
