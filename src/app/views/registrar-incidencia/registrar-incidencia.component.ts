import { Component, OnInit } from "@angular/core";
import { IncidenteInterface } from "../../models/incidente";
import { IncidenciaService } from "../../services/incidencia.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
@Component({
  selector: "app-registrar-incidencia",
  templateUrl: "./registrar-incidencia.component.html",
  styleUrls: ["./registrar-incidencia.component.css"]
})
export class RegistrarIncidenciaComponent implements OnInit {
  public nombreEquipo = "";
  public titulo: string;
  public codIncidente: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private incidenciaService: IncidenciaService,
    private router: Router
  ) {
    this.incidenciaService.codActualEquipo.subscribe(
      message => (this.nombreEquipo = message)
    );
  }

  ngOnInit(): void {
    this.codIncidente = this.activatedRoute.snapshot.paramMap.get(
      "codIncidente"
    ); //idComponente
    if (this.codIncidente) {
      this.titulo = "Modificar Incidente";
      this.incidenciaService
        .getIncidencia(this.codIncidente)
        .subscribe(incidente => {
          //this.nombreCatalogo=incidente.codCatalogo;
          this.nombreEquipo = incidente.codEquipo;

          this.postIncidencia.setValue({
            fecha: incidente.fecha,
            descripcion: incidente.descripcion,
            codEquipo: incidente.codEquipo,
            codDocente: incidente.codDocente
          });
        });
    } else {
      this.titulo = "Agregar Incidente";
    }
  }
  public postIncidencia = new FormGroup({
    fecha: new FormControl("", Validators.required),
    descripcion: new FormControl(),
    codDocente: new FormControl("", Validators.required),
    codEquipo: new FormControl("")
  });
  agregarIncidencia(incidente: IncidenteInterface) {
    console.log("incisdencia", incidente);
    if (this.codIncidente) {
      //actualizar catalogo
      this.incidenciaService
        .actualizarIncidencia(this.codIncidente, incidente)
        .subscribe(res => {
          console.log("Post updated successfully!");
        });
      this.irAtras();
    } else {
      //agregar catalogo
      incidente.codEquipo = this.nombreEquipo;
      incidente.fecha = this.convertDateFormat(incidente.fecha);
      console.log("incidencia", incidente);
      this.incidenciaService.agregarIncidencia(incidente).subscribe(
        result => {
          this.router.navigate(["/docente/incidente"]);
        },
        err => {
          console.log(err);
        }
      );
      this.irAtras();
    }
  }
  convertDateFormat(string) {
    var info = string.split("-");
    return info[0] + "-" + info[1] + "-" + info[2];
  }
  getEquipo() {
    this.router.navigate(["equipo/seleccionar-equipo/2"]); //opcion de incidente
  }
  irAtras() {
    this.router.navigate(["/docente/incidente"]);
  }
}
