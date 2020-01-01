import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@Angular/router";

import { Photo } from "../photo/photo";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html'
})

export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }
}
