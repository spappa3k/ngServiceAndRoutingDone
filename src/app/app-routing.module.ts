import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"albums", component:AlbumsComponent
  },
  {
    path:"albums/:id", component:PhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
