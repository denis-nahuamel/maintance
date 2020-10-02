import { Component, OnInit } from '@angular/core';
import { ComponenteInterface } from '../../models/componente';
import { ComponenteService } from "../../services/componente.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'listar-componentes.component.html'
})
export class ListarComponentesComponent {

  constructor(private activatedRoute: ActivatedRoute,private componenteService: ComponenteService,
          private formBuilder: FormBuilder, private router: Router) { }

 Componentes: any = [];
  ngOnInit(): void {
    
    this.cargarComponentes();

  }

  cargarComponentes() {
    
    return this.componenteService.getComponentes().subscribe((data: {}) => {
      this.Componentes = data;
    })
  }
  borrarComponente(componente:ComponenteInterface) {
    
    return this.componenteService.borrarComponente(componente.codComponente).subscribe(res => {
         this.Componentes = this.Componentes.filter(item => item.codComponente !== componente.codComponente);
         console.log('Post deleted successfully!');
    })
  }
  componenteDetalles(componente:ComponenteInterface){
      this.router.navigate(['componente/editar/'+componente.codComponente]);  
  }
  agregarComponente(){
    
      this.router.navigate(['componente/insertar']);  
  }
}
