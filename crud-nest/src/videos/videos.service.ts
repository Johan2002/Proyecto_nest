import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from './entities/video.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class VideosService {

  constructor(
    @InjectRepository(Video)
    private readonly usersRepository: Repository<Video>,
  ){}

  async create(createVideoDto: CreateVideoDto): Promise<any> {
    const video = this.usersRepository.create(createVideoDto);
    await this.usersRepository.save(video);
    // video.Titulo = createVideoDto.Titulo;
    // video.Descripcion = createVideoDto.Descripcion;
    // video.url = createVideoDto.url;
    return {message: 'Video creado.'};
  }

  async findAll(): Promise<Video[]> {
    const list = await this.usersRepository.find();
    if (!list.length){
      throw new NotFoundException({message: 'Lista de videos vacía.'});
    }
    return list;
  }

  async findOne(id: number): Promise<Video> {
    const video = await this.usersRepository.findOneBy({id : id});
    if (!video){
      throw new NotFoundException ({message: 'No existe este video.'});
    }
    return video;
  }

  async update(id: number, updateVideoDto: UpdateVideoDto): Promise<any> {

    const video = await this.findOne(id);
    updateVideoDto?  video.Titulo = updateVideoDto.Titulo : video.Titulo = video.Titulo;
    updateVideoDto?  video.Descripcion = updateVideoDto.Descripcion : video.Descripcion = video.Descripcion;
    updateVideoDto?  video.url = updateVideoDto.url : video.url = video.url;
    await this.usersRepository.save(video);
    // video.Titulo = updateVideoDto.Titulo;
    // video.Descripcion = updateVideoDto.Descripcion;
    // video.url = updateVideoDto.url;
    return {message: 'Video actualizado.'};
  }

  async remove(id: string): Promise<any> {
    await this.usersRepository.delete(+id);
    return {message: 'Video eliminado.'}
  }
}
