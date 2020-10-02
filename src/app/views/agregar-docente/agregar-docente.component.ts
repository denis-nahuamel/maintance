import { Component, OnInit } from '@angular/core';
import { DocenteInterface } from '../../models/docente';
import { DocentesService } from "../../services/docentes.service";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-agregar-docente',
  templateUrl: './agregar-docente.component.html',
  styleUrls: ['./agregar-docente.component.css']
})
export class AgregarDocenteComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private docenteService: DocentesService, private router: Router) { }

  ngOnInit(): void {
  }
   public postDocente = new FormGroup({
    nombres: new FormControl('', Validators.required),
    apellidoPaterno: new FormControl('', Validators.required),
    apellidoMaterno: new FormControl('', Validators.required),
    dodDocente: new FormControl('', Validators.required),
    dni: new FormControl(''),
    
  });
 agregarDocente(docente:DocenteInterface){
  	
  
  	 this.docenteService.agregarDocente(docente).subscribe((result) => {
      this.router.navigate(['/docentes']);
    }, (err) => {
      console.log(err);
    });
  }
  irAtras(){
  	this.router.navigate(['/docentes']);
  }

}
