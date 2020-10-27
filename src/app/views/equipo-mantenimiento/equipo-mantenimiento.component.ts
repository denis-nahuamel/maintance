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
  codEquipo:string;//codigo del equipo
  activo:any;//equipo activo o inactivo
  solucion:any;//tipo de solucion
  postSoftware=[];
  Informe:any;//id del informe
public postMantenimiento = new FormGroup({


    estado: new FormControl(''),
    detalles: new FormControl(''),
    codEquipo: new FormControl(''),
    componenteEquipo: new FormControl(''),
    componenteAlmacen: new FormControl(''),
    solucion:new FormControl('')
  });
  constructor(private repuestosService:RepuestosService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router,private incidenteService: IncidenciaService) {
this.activo = [{ value: 1, text: "Operativo", selected: "checked" }, { value: 2, text: "Inoperativo", selected: "" }];
this.solucion = [{ value: 1, text: "Hardware", selected: "checked" }, { value: 2, text: "Software", selected: "" }];

  }

  ngOnInit(): void {
     this.repuestosService.currentMessage.subscribe(message => this.ComponenteAlmacen= message)
    this.idIncidente = this.activatedRoute.snapshot.paramMap.get('id');//i
    this.componenteAlmacen=this.ComponenteAlmacen.catalogo;
    this.getIncidente();
   // this.obtenerInforme();
  }
  getIncidente(){
      this.incidenteService.getIncidencia(this.idIncidente).subscribe((data: {}) => {
    	console.log("load",data);
      this.Equipo = data;
      this.incidenteService.obtenerInforme(this.Equipo.codEquipo).subscribe((data: {}) => {
        this.Informe=data;
        console.log("infor",data);
      });
    });
  }
  obtenerInforme(){
     console.log("infor");
      this.incidenteService.obtenerInforme(this.Equipo.codEquipo).subscribe((data: {}) => {
       this.Informe=data;
       console.log("infor",data);
    });
  }
  //=================realizar mantenimiento================
  realizarMantenimiento(datos){

      if (datos.solucion==2) {
          var obj = {};
          obj['descripcion'] = datos.detalles;
          obj['codInforme'] = this.Informe.codInforme;
          this.postSoftware.push(obj);
      }
    this.incidenteService.insertarSolucionSoftware(this.postSoftware).subscribe(res => {
         console.log('Se agrego con exito',res);

    });
    //this.irAtras();
  }
  //============obtener componente que va a ser reemplazado
  obtenerComponente(){
     this.router.navigate(['equipos-asignados/'+this.Equipo.codEquipo+'/componentes']);//equipo-mantenimiento/equipo-componentes
  }
getRepuestos(){
  	   this.router.navigate(['equipos-asignados/'+this.idIncidente+'/repuestos']);//repuestos
  }
}
