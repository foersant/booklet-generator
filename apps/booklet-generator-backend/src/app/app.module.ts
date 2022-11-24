import { Module } from '@nestjs/common';
import { BookletsModule } from './booklets/booklets.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BookletsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
