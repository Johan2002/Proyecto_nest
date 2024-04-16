import { Module } from '@nestjs/common';
import { SumaController } from './suma.controller';
import { SumaService } from './suma.service';

@Module({
  imports: [],
  controllers: [SumaController],
  providers: [SumaService],
})
export class SumaModule {}
