import { Module } from '@nestjs/common';
import { BookletsController } from './controllers/booklets.controller';

@Module({
    controllers: [BookletsController]
})

export class BookletsModule {}
