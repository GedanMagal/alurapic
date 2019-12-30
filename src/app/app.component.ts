import { PhotoService } from "./photos/photo.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Photo } from "./photos/photo/photo";

const API = "http://localhost:3000";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent{}
