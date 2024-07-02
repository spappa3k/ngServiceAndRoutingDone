import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlbumsModel } from '../../models/models';
import { PhotoModel } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {


  constructor(private http:HttpClient) { }

  addListAlbums():Observable<AlbumsModel[]>{
    return this.http.get<AlbumsModel[]>("https://jsonplaceholder.typicode.com/albums");
  }

  addPhoto(id: string): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>("https://jsonplaceholder.typicode.com/photos?albumId=" + id)
  }

}
