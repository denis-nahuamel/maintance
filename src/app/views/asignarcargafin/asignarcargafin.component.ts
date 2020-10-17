import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EquipoAsignadoInterface } from "../../models/equipoasignado";
import { EquipoInterface } from "../../models/equipo";
import { PersonalService } from "../../services/personal.service";
import { EquiposService } from "../../services/equipos.service";
import { TecnicoService } from "../../services/tecnico.service";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "app-asignarcargafin",
  templateUrl: "./asignarcargafin.component.html",
  styleUrls: ["./asignarcargafin.component.css"]
})
export class AsignarcargafinComponent implements OnInit {
  public idTecnico = null;
  public tecnico: EquipoAsignadoInterface;
  public Equipo: Observable<EquipoInterface[]>;
  Equipos: any = [];
  selectedItemsList = [];
  checkedIDs = [];
  nombreTecnico: string;
  enviarCarga=new Array();
  constructor(
    private activatedRoute: ActivatedRoute,
    private personalService: PersonalService,
    private tecnicoService: TecnicoService,
    private router: Router,
    private equipoService: EquiposService
  ) {
    this.tecnico = null;
  }

  ngOnInit(): void {
    this.idTecnico = this.activatedRoute.snapshot.paramMap.get("id"); //idgrado
    this.tecnicoService.tecnicoActual.subscribe(
      message => (this.tecnico = message)
    );
    this.personalService
      .getTecnico(this.idTecnico)
      .subscribe((data: EquipoAsignadoInterface) => (this.tecnico = { ...data }));
    this.loadEquipo();
    this.fetchSelectedItems();
    this.fetchCheckedIDs();
  }

  loadEquipo() {
    return this.equipoService.getEquiposNoAsignados(this.tecnico.dni).subscribe((data: {}) => {
      console.log(data);
      this.Equipos = data;
    });
  }
  changeSelection() {
    this.fetchSelectedItems();
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.Equipos.filter((value, index) => {
      return value.checked;
    });
    console.log("items", this.selectedItemsList);
  }

  fetchCheckedIDs() {
   // this.checkedIDs = [];
    this.Equipos.forEach((value, index) => {
      if (value.checked) {
        this.checkedIDs.push(value.id);
      }
    });
  }
  asignarCarga() {

    var enviarCargaTecnico = {
    dni: this.tecnico.dni,

    equipos: this.selectedItemsList
    }
    console.log(enviarCargaTecnico);
  }
  irAtras(){
  	this.router.navigate(['/asignar-carga']);
  }

}
