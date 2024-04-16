import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class CreateVideoDto {
  id:     number;
  
  @IsNotBlank({message: 'El titulo no puede estar vacío.'})
  Titulo: string;
  @IsString()
  @IsNotEmpty()
  Descripcion: string;
  @IsNotEmpty()
  @IsString()
  url: string;
}
