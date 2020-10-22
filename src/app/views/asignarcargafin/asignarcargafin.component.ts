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
    //return this.equipoService.getEquiposNoAsignados(this.tecnico.dni).subscribe((data: {}) => {
      return this.equipoService.getEquiposNoAsignados("70123123").subscribe((data: {}) => {
     // console.log(data);
      this.Equipos = data;
    });
    console.log(this.Equipos);
 // }
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
        let cargaTecnico = [];
       /* for (let index of this.Equipos) {
         if(this.Equipos[index].dni){

              cargaTecnico.push({
                                fecha:this.Equipos[index].fecha,
                                dni:this.Equipos[index].dni,

                                codJefe:"799768999",
                                codIncidente: this.Equipos[index].codIncidente
                                });

         }*/
         console.log(this.Equipos);

       // }

    console.log(cargaTecnico);
  }
  irAtras(){
  	this.router.navigate(['/asignar-carga']);
  }

}
