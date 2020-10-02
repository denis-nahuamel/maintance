import { Component, OnInit } from '@angular/core';
import { PersonalInterface } from '../../models/personal';
import { PersonalService } from "../../services/personal.service";
import { RepuestosService } from "../../services/repuestos.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipo-mantenimiento',
  templateUrl: './equipo-mantenimiento.component.html',
  styleUrls: ['./equipo-mantenimiento.component.css']
})
export class EquipoMantenimientoComponent implements OnInit {
	public idEquipo=null;
  public nombreRepuesto="";
  message:string;
  constructor(private repuestosService:RepuestosService,private activatedRoute: ActivatedRoute,private personalService: PersonalService,private formBuilder: FormBuilder, private router: Router) {
   
  }

  ngOnInit(): void {
     this.repuestosService.currentMessage.subscribe(message => this.nombreRepuesto = message)
   //  this.nombreRepuesto=this.repuestosService.nombreRepuesto;
  	this.idEquipo = this.activatedRoute.snapshot.paramMap.get('id');//idgrado
  }
getRepuestos(){
  	   this.router.navigate(['equipos-asignados/'+this.idEquipo+'/repuestos']);  
  }
}
