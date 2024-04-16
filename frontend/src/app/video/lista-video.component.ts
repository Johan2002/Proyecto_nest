import { Component } from '@angular/core';
import { Video } from '../models/video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-lista-video',
  templateUrl: './lista-video.component.html',
  styleUrl: './lista-video.component.css'
})
export class ListaVideoComponent {
  video: Video[] = [];

  constructor(
    private videoService: VideoService,
    ) { }

  ngOnInit(): void {
    this.cargarVideos();
  }

  cargarVideos(): void {
    this.videoService.lista().subscribe(
      data => {
        this.video = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number): void {
    console.log(`Borrar el ${id}`);
  }
}
