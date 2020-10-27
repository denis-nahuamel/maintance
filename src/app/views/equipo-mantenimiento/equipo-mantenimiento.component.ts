import { Component, OnInit } from '@angular/core';
import { PersonalInterface } from '../../models/personal';
import { RepuestosService } from "../../services/repuestos.service";
import { ComponenteService } from "../../services/componente.service";
import { IncidenciaService } from "../../services/incidencia.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-equipo-mantenimiento',
  templateUrl: './equipo-mantenimiento.component.html',
  styleUrls: ['./equipo-mantenimiento.component.css']
})
export class EquipoMantenimientoComponent implements OnInit {
	public idIncidente=null;
  public componenteAlmacen="";//nombre del componente seleccionado
  public componenteEquipo="";//nombre del componente seleccionado
  message:any;
  Equipo:any;
  ComponenteAlmacen:any;//componente que se selecciono del almacen
  ComponenteEquipo:any;//componente del equipo que va a ser retirado
  codEquipo:string;//codigo del equipo
  activo:any;//equipo activo o inactivo
  solucion:any;//tipo de solucion
  postSoftware=[];
  Informe:any;//id del informe
  tipoSolucion:string="2";//solucion por defecto SOFTWARE
  estado:string="2";//estado del equipo por defecto OPERATIVO
public postMantenimiento = new FormGroup({//formulario
    estado: new FormControl(''),
    detalles: new FormControl(''),
    codEquipo: new FormControl(''),
    componenteEquipo: new FormControl(''),
    componenteAlmacen: new FormControl(''),
    solucion:new FormControl('')
  });

  constructor(private repuestosService:RepuestosService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router,
    private incidenteService: IncidenciaService,
    private componenteService: ComponenteService) {
        this.activo = [{ value: 1, text: "Inoperativo", selected: "false" }, { value: 2, text: "Operativo", selected: "true" }];
        this.solucion = [{ value: 1, text: "Hardware", selected: "true" }, { value: 2, text: "Software", selected: "false" }];
        this.idIncidente = this.activatedRoute.snapshot.paramMap.get('id');//recoger el id de la url
  }

  ngOnInit(): void {
     this.repuestosService.currentMessage.subscribe(message => this.ComponenteAlmacen= message)//datos del componente del almacen
      this.componenteService.nombreComponenteActual.subscribe(message => this.ComponenteEquipo= message)//datos del componente del equipo

    this.componenteAlmacen=this.ComponenteAlmacen.catalogo;//obtenemos solo el nombre del componente en almacen
    this.componenteEquipo=this.ComponenteEquipo.catalogo;//obtenemos solo el nombre del componente en el equipo
    this.getIncidente();
  }
  getIncidente(){
      this.incidenteService.getIncidencia(this.idIncidente).subscribe((data: {}) => {
      this.Equipo = data;
      this.codEquipo=this.Equipo.codEquipo;
      this.incidenteService.obtenerInforme(this.Equipo.codEquipo).subscribe((data: {}) => {//obtiene el codigo del informe
        this.Informe=data;
      });
    });
  }
cambioSolucion(g){//si se cambia de estado, se actualiza el valor por defecto
this.tipoSolucion=g.value;
}
//[checked]="postMantenimiento.get('estado').value == g.value"
cambioEstado(g){//si se cambia de estado, se actualiza el valor por defecto
this.estado=g.value;
}
  //=================realizar mantenimiento================
  realizarMantenimiento(datos){
    console.log(this.tipoSolucion);
    console.log(datos);
      if(this.estado=="2"){
          this.estado="OPERATIVO";
      }
      if(this.estado=="1"){
          this.estado="MALOGRADO";
      }
      if (this.tipoSolucion=="2") {//valor 2 es para software
          var obj = {};
          obj['descripcion'] = datos.detalles;
          obj['codInforme'] = this.Informe.codInforme;
          this.postSoftware.push(obj);
          console.log( this.postSoftware);
          this.incidenteService.insertarSolucionSoftware(this.postSoftware).subscribe(res => {
         console.log('Se agrego con exito',res);
          });
      }
       if (this.tipoSolucion=="1") {//si la solucion es tipo hardware
             obj['descripcion'] = datos.detalles;
             obj['codComponente'] = this.ComponenteAlmacen.codComponente;
             obj['codInforme'] = this.Informe.codInforme;
             obj['estado'] = this.estado;
              obj['codEquipo'] = this.codEquipo;
       }

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
