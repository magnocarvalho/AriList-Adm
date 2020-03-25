import { Component, ViewChild } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import "firebase/database";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

export interface UsuariosAuth {
  email: string;
  photoURL: string;
  firstName: string;
  lastName: string;
  nome: string;
  createdAt: string;
  provider: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  items: Observable<UsuariosAuth[]>;
  displayedColumns: string[] = [
    "email",
    "createdAt",
    "provider",
    "photoURL",
    "nome",
    "firstName",
    "lastName"
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(db: AngularFireDatabase) {
    this.items = <any>db.list("usuario").valueChanges();
  }
}
