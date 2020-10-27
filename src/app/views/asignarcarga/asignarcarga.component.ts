import { Component, OnInit } from "@angular/core";
import { TecnicoInterface } from "../../models/tecnico";
import { EquipoAsignadoInterface } from "../../models/equipoasignado";
import { TecnicoService } from "../../services/tecnico.service";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from "@angular/forms";
import { of } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-asignarcarga",
  templateUrl: "./asignarcarga.component.html",
  styleUrls: ["./asignarcarga.component.css"]
})
export class AsignarcargaComponent implements OnInit {
  private frase: TecnicoInterface;
  myGroup: FormGroup;
  Tecnico: any = [];
  Tecnicos: any = [];
  products: TecnicoInterface[] = [];
  constructor(
    private tecnicoService: TecnicoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTecnicos();
  }

  loadTecnicos() {
    return this.tecnicoService.getEquiposAsignados().subscribe((data: {}) => {
      this.Tecnicos = data;
    });
  }
  getTecnico(tecnico: EquipoAsignadoInterface) {//obtiene los datos del tecnico
    this.tecnicoService.tecnicoSeleccionado(tecnico);
   this.router.navigate(["asignar-carga/"+tecnico.dni]);//asignar-carga-fin
  }

  checkAllCheckBox(ev) {
    this.Tecnicos.forEach(x => (x.checked = ev.target.checked));
  }

  isAllCheckBoxChecked() {
    return this.Tecnicos.every(p => p.checked);
  }
}
