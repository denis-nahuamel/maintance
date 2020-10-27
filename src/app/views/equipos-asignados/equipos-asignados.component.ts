import { Component, OnInit } from '@angular/core';
import { EquipoInterface } from '../../models/equipo';
import { EquiposService } from "../../services/equipos.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipos-asignados',
  templateUrl: './equipos-asignados.component.html',
  styleUrls: ['./equipos-asignados.component.css']
})
export class EquiposAsignadosComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private equipoService: EquiposService,
  				private formBuilder: FormBuilder, private router: Router) { }
  idTecnico:string;
 Equipos: any = [];//todos los equipos
 Tareas: any = [];//los equipos asignados al tecnico
  ngOnInit(): void {

    this.cargarEquipos();

  }

  cargarEquipos() {

    return this.equipoService.getEquiposAsignados("70123123").subscribe((data: {}) => {
    	console.log("load",data);
      this.Equipos = data;
      this.Equipos.forEach((value, index) => {
      if (value.dni=="70123123") {//solo equipos asignados al dni del tecnico

          this.Tareas.push(value);//agregar al arreglo tareas
      }
    });
    })

  }
    equipoDetalles(equipo){
       this.router.navigate(['equipos-asignados/'+equipo.codIncidente]);//equipo-incidente
  }
}
