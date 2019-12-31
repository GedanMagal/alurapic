import { Routes, RouterModule } from '@Angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NgModule } from '@angular/core';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';

const routes: Routes = [
  { path: 'user/:userName', component: PhotoListComponent },
  { path: 'p/add', component: PhotoFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
   ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
