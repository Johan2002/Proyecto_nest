import { Injectable } from '@nestjs/common';

@Injectable()
export class SumaService {
  getHello(): string {
    return 'HOLA MUENDO EN SUMA!!!!';
  }
}