import { Component, OnInit } from '@angular/core';
import { EquipoInterface } from '../../models/equipo';
import { EquiposService } from "../../services/equipos.service";
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-equipo-incidente',
  templateUrl: './equipo-incidente.component.html',
  styleUrls: ['./equipo-incidente.component.css']
})
export class EquipoIncidenteComponent implements OnInit {
	public idEquipo=null;
 public formDetalles = new FormGroup({
    fechaLimite: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    laboratorio: new FormControl('', Validators.required),
    equipo: new FormControl(''),
    
  });
  constructor(private activatedRoute: ActivatedRoute,private equiposService: EquiposService, private router: Router) { }


  ngOnInit(): void {
  	this.idEquipo = this.activatedRoute.snapshot.paramMap.get('id');//idgrado
  }
irMantenimiento(){
  	   this.router.navigate(['equipos-asignados/'+this.idEquipo+'/mantenimiento']);  
  }
}
