export class Video {
    id: number;
    titulo: string;
    descripcion: string;
    url: string;

    constructor(id: number, titulo: string, descripcion: string, url: string) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;
    }
}
