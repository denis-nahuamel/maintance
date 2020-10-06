import { Component, OnInit } from '@angular/core';
import { EquipoInterface } from '../../models/equipo';
import { EquiposService } from "../../services/equipos.service";
import { ComponenteService } from "../../services/componente.service";
import { IncidenciaService } from "../../services/incidencia.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-select-equipo',
  templateUrl: './select-equipo.component.html',
  styleUrls: ['./select-equipo.component.css']
})
export class SelectEquipoComponent implements OnInit {

 Equipos: any = [];
term: string;
selectedItemsList = [];
  checkedIDs = [];
   message:string;
  public idEquipo=null;
  public opcion=null;
    constructor(private activatedRoute: ActivatedRoute
      ,private equipoService: EquiposService,private componenteService: ComponenteService,private formBuilder: FormBuilder, 
  			private router: Router,private incidenteService: IncidenciaService) {
  
  }

  ngOnInit(): void {
   this.opcion = this.activatedRoute.snapshot.paramMap.get('id');//identificador de la opcion
    this.loadEquipos();
  this.fetchSelectedItems();
    this.fetchCheckedIDs();
      this.equipoService.currentMessage.subscribe(message => this.message = message)
  }

loadEquipos() {
  	
    return this.equipoService.getEquipos().subscribe((data: {}) => {
    
      this.Equipos = data;
    })
  }
  nombreEquipo(){
  	if(this.opcion==1){
  	  this.componenteService.codEquipo(this.selectedItemsList[0].codEquipo);
  	   this.router.navigate(['componente/insertar']);  
    }
    if(this.opcion==2){
       this.incidenteService.codEquipo(this.selectedItemsList[0].codEquipo);
       this.router.navigate(['registrar-incidencia']);  
    }
  }
   changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.Equipos.filter((value, index) => {
      return value.checked
    });
     console.log("items",this.selectedItemsList);
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.Equipos.forEach((value, index) => {
      if (value.checked) {
        this.checkedIDs.push(value.id);
      }
    });
    
  }
}
