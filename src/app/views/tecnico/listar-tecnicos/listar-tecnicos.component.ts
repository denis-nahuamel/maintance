import { Component, OnInit } from '@angular/core';
import { TecnicoInterface } from '../../../models/tecnico';
import { TecnicoService } from "../../../services/tecnico.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-tecnicos',
  templateUrl: './listar-tecnicos.component.html',
  styleUrls: ['./listar-tecnicos.component.css']
})
export class ListarTecnicosComponent implements OnInit {

constructor(private activatedRoute: ActivatedRoute,private tecnicoService: TecnicoService,
  				private formBuilder: FormBuilder, private router: Router) { }

 Tecnicos: any = [];
  ngOnInit(): void {
    
    this.cargarTecnicos();

  }

  cargarTecnicos() {
  	
    return this.tecnicoService.getTecnicos().subscribe((data: {}) => {
    	
      this.Tecnicos = data;
    })
  }
   borrarTecnico(tecnico:TecnicoInterface) {
    
    return this.tecnicoService.borrarTecnico(tecnico.dni).subscribe(res => {
         this.Tecnicos = this.Tecnicos.filter(item => item.dni !== tecnico.dni);
         console.log('Post deleted successfully!');
    })
  }
  tecnicoDetalles(tecnico:TecnicoInterface){

      this.router.navigate(['tecnico/editar/'+tecnico.dni]);  
  }
  agregarTecnico(){
    
      this.router.navigate(['tecnico/insertar']);  
  }
}
