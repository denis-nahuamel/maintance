import { Component, OnInit } from '@angular/core';
import { EquipoInterface } from '../../models/equipo';
import { EquiposService } from "../../services/equipos.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-equipos',
  templateUrl: './listar-equipos.component.html',
  styleUrls: ['./listar-equipos.component.css']
})
export class ListarEquiposComponent implements OnInit {

 constructor(private activatedRoute: ActivatedRoute,private equipoService: EquiposService,
  				private formBuilder: FormBuilder, private router: Router) { }

 Equipos: any = [];
  ngOnInit(): void {
    
    this.cargarEquipos();

  }

  cargarEquipos() {
  	
    return this.equipoService.getEquipos().subscribe((data: {}) => {
    	
      this.Equipos = data;
    })
  }
   borrarEquipo(equipo:EquipoInterface) {
    
    return this.equipoService.borrarEquipo(equipo.codEquipo).subscribe(res => {
         this.Equipos = this.Equipos.filter(item => item.codEquipo !== equipo.codEquipo);
         console.log('Post deleted successfully!');
    })
  }
  equipoDetalles(equipo:EquipoInterface){
    console.log("dd");
      this.router.navigate(['equipo/editar/'+equipo.codEquipo]);  
  }
  agregarEquipo(){
    
      this.router.navigate(['equipo/insertar']);  
  }
}
