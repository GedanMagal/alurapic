import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { BrowserModule } from '@angular/platform-browser';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PhotoComponent,
    PhotoListComponent
  ],
  providers: []
})

export class PhotoModule{

}
