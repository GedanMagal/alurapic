import { Component, OnInit } from "@angular/core";
import { Photo } from "../photo/photo";
import { PhotoService } from "../services/photo.service";

@Component({
  selector: "app-photo-list",
  templateUrl: "./photo-list.component.html"
})
export class PhotoListComponent implements OnInit {
  constructor(private photoService: PhotoService) {}
  photos: Photo[] = [];
  ngOnInit(): void {
    this.photoService
      .listFromUsers("flavio")
      .subscribe(photos => (this.photos = photos));
  }
}
