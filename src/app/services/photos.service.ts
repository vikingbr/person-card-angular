import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(
    private http: HttpClient
  ) { }

  getPhotos(albumId) {
    return this.http.get(`https://randomuser.me/api/`);
  }

}
