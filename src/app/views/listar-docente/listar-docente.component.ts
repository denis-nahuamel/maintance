import { Component, OnInit } from '@angular/core';
import { DocenteInterface } from '../../models/docente';
import { DocentesService } from "../../services/docentes.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-docente',
  templateUrl: './listar-docente.component.html',
  styleUrls: ['./listar-docente.component.css']
})
export class ListarDocenteComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private docenteService: DocentesService,
  				private formBuilder: FormBuilder, private router: Router) { }

 Docentes: any = [];
  ngOnInit(): void {
    //this.idTecnico = this.activatedRoute.snapshot.paramMap.get('id');//idgrado
    this.cargarDocentes();

  }

  cargarDocentes() {
  	
    return this.docenteService.getDocentesAsignados("2").subscribe((data: {}) => {
    	console.log("load",data);
      this.Docentes = data;
    })
  }
    docenteDetalles(docente:DocenteInterface){
      console.log("hellooo");
       this.router.navigate(['docentes/agregar-docente/'+docente.id]);  
  }
   agregarDocente(){
      console.log("hellooo");
       this.router.navigate(['docentes/agregar-docente']);  
  }
}
