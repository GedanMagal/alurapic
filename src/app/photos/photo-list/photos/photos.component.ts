import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnInit {

  @Input() photos: Photo[] = [];
  constructor() { }

  ngOnInit() {
  }

}
