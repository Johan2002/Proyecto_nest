import {  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Video {
    @PrimaryGeneratedColumn()
    id:          number;
    @Column({ type: 'varchar', length: 50 })
    Titulo:      string;
    @Column()
    Descripcion: string;
    @Column()
    url:         string;
}

