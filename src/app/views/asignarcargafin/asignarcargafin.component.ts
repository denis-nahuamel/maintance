import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EquipoAsignadoInterface } from "../../models/equipoasignado";
import { EquipoAsignadoDetalleInterface } from "../../models/equipoasignadodetalle";
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
  cargaTecnico=[];
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
      this.Equipos = data;
      this.Equipos.forEach((value, index) => {
        if (value.dni) {
          value.checked=true;
        }
      });
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
  convertDateFormat(string) {
    var info = string.split("-");
    return info[0] + "-" + info[1] + "-" + info[2];
  }
  asignarCarga() {
    console.log("rea",this.selectedItemsList);
    var todo = {};
      this.Equipos.forEach((value, index) => {
      if (value.checked) {
          var obj = {};
          obj['codTarea'] = "1";
          obj['dni'] = value.dni;
          obj['codJefe'] = value.codJefe;
          obj['codIncidente'] = value.codIncidente;
          this.cargaTecnico.push(obj);
      }
    });
    console.log("DADS"+JSON.stringify(this.cargaTecnico));
  }
  irAtras(){
  	this.router.navigate(['/asignar-carga']);
  }

}
