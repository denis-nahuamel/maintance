import { Component, OnInit } from '@angular/core';
import { DocenteInterface } from '../../../models/docente';
import { DocentesService } from "../../../services/docentes.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-docentes',
  templateUrl: './listar-docentes.component.html',
  styleUrls: ['./listar-docentes.component.css']
})
export class ListarDocentesComponent implements OnInit {


constructor(private activatedRoute: ActivatedRoute,private docenteService: DocentesService,
  				private formBuilder: FormBuilder, private router: Router) { }

 Docentes: any = [];
  ngOnInit(): void {

    this.cargarDocentes();

  }

  cargarDocentes() {

    return this.docenteService.getDocentes().subscribe((data: {}) => {
      console.log(data);
      this.Docentes = data;
    })
  }
   borrarDocente(docente:DocenteInterface) {

    return this.docenteService.borrarDocente(docente.codDocente).subscribe(res => {
         this.Docentes = this.Docentes.filter(item => item.codDocente !== docente.codDocente);
         console.log('Post deleted successfully!');
    })
  }
  docenteDetalles(docente:DocenteInterface){

      this.router.navigate(['docente/editar/'+docente.codDocente]);
  }
  agregarDocente(){

      this.router.navigate(['docente/insertar']);
  }

}
