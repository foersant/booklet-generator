import { Module } from '@nestjs/common';
import { BookletsController } from './controllers/booklets.controller';
import { BookletsService } from './services/booklets.service';
import Booklet from './entities/booklet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Booklet])],
    controllers: [BookletsController],
    providers: [BookletsService]
})

export class BookletsModule {}
