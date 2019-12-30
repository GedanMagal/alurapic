import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    PhotoComponent
  ],
  providers: []
})

export class PhotoModule{

}
