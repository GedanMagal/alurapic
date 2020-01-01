import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@Angular/router";

import { Photo } from "../photo/photo";
import { PhotoService } from "../services/photo.service";




@Component({
  selector: "app-photo-list",
  templateUrl: "./photo-list.component.html"
})

export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  constructor(
    private photoService: PhotoService,
    public activatedRoute: ActivatedRoute
  ) {}





  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService
      .listFromUsers(userName)
      .subscribe(photos => (this.photos = photos));
  }
}
