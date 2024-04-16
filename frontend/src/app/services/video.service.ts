import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Video } from '../models/video';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videoURL = environment.videoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Video[]> {
    return this.httpClient.get<Video[]>(`${this.videoURL}`);
  }

  public detail(id: number): Observable<Video> {
    return this.httpClient.get<Video>(`${this.videoURL}${id}`);
  }

  public save(video: Video): Observable<any> {
    return this.httpClient.post<any>(`${this.videoURL}`, video);
  }

  public update(id: number, video: Video): Observable<any> {
    return this.httpClient.put<any>(`${this.videoURL}${id}`, video);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.videoURL}${id}`);
  }

}
