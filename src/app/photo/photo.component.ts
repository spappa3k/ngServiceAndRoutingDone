import { Component, OnInit } from '@angular/core';
import { PhotoModel } from '../../../models/models';
import { AlbumService } from '../album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent implements OnInit{
photo:PhotoModel[]=[];
constructor(public ps:AlbumService, private route:ActivatedRoute){
  
}

ngOnInit(): void {
  const id=this.route.snapshot.paramMap.get("id");
  this.ps.addPhoto(id!).subscribe(p=>this.photo=p);
}
}

