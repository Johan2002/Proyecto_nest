import { Controller, Get } from '@nestjs/common';
import { SumaService } from './suma.service';

@Controller()
export class SumaController {
  constructor(private readonly sumaService: SumaService) {}

  @Get()
  getHello(): string {
    return this.sumaService.getHello();
  }

}
