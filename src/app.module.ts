import { Module } from '@nestjs/common';
import { AppController, EditInfo } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, EditInfo],
  providers: [AppService],
})
export class AppModule {}
