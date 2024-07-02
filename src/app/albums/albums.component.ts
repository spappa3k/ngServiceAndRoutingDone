import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { AlbumsModel } from '../../../models/models';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
albums:AlbumsModel[]=[];

  constructor(public ps:AlbumService){}

  ngOnInit(): void {
    this.ps.addListAlbums().subscribe(
      a=>{this.albums=a;})
  }
}
