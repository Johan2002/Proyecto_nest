import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'logre comprarme el pc de mis sueños!!!!';
  }
}
