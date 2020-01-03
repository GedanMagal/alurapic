  import { Injectable } from "@angular/core";
  import { Observable } from "rxjs";
  import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

  import { PhotoService } from "./../services/photo.service";
  import { Photo } from "./../photo/photo";

  @Injectable({ providedIn: "root" })
  export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
    constructor(private service: PhotoService) {}

    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<Photo[]> {
      const userName = route.params.userName;
      return this.service.listFromUsers(userName);
    }
  }
