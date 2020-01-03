import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@Angular/router";
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';


import { Photo } from "../photo/photo";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html'
})

export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();


  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];

    this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
}
}
