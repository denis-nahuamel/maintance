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

  constructor(private activatedRoute: ActivatedRoute,private incidenciaService: IncidenciaService, private router: Router) { }

  ngOnInit(): void {
  }
   public postIncidencia = new FormGroup({
    fechaIncidencia: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    laboratorio: new FormControl('', Validators.required),
    equipo: new FormControl(''),
    
  });
 agregarIncidencia(incidente:IncidenteInterface){
  	
  	console.log("incidencia",incidente);
  	 this.incidenciaService.agregarIncidencia(incidente).subscribe((result) => {
      this.router.navigate(['/asignar-carga']);
    }, (err) => {
      console.log(err);
    });
  }
}
