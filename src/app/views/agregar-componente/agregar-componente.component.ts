import { Component, OnInit } from '@angular/core';
import { ComponenteInterface } from '../../models/componente';
import { ComponenteService } from "../../services/componente.service";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-agregar-componente',
  templateUrl: './agregar-componente.component.html',
  styleUrls: ['./agregar-componente.component.css']
})
export class AgregarComponenteComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private componenteService: ComponenteService, private router: Router) { }

  ngOnInit(): void {
  }
   public postComponente = new FormGroup({
    codComponente: new FormControl('', Validators.required),
    ubicacion: new FormControl('', Validators.required),
    codEquipo: new FormControl('', Validators.required),
    codCatalogo: new FormControl('', Validators.required),
    estado: new FormControl(''),
    
  });
 agregarComponente(componente:ComponenteInterface){
  	
  
  	 this.componenteService.agregarComponente(componente).subscribe((result) => {
      this.router.navigate(['/componentes']);
    }, (err) => {
      console.log(err);
    });
  }
  irAtras(){
  	this.router.navigate(['/componentes']);
  }

}
