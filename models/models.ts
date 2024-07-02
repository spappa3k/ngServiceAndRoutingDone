export type AlbumsModel=
{
    userId: number,
    id: number,
    title: string  
}

export type PhotoModel= 
{
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }