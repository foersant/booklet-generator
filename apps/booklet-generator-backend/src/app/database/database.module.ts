import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Booklet from '../booklets/entities/booklet.entity';
import { BookletsService } from '../booklets/services/booklets.service'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    Booklet,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
          "type" : "postgres",
          "host" : configService.get('POSTGRES_HOST'),
          "port" : configService.get('POSTGRES_PORT'),
          "username" : configService.get('POSTGRES_USER'),
          "password" : configService.get('POSTGRES_PASSWORD'),
          "database" : configService.get('POSTGRES_DB'),
          "entities" : [Booklet],
          "synchronize" : true
      })
    }),
    TypeOrmModule.forFeature([Booklet])
  ],
  providers: [
    BookletsService
  ],
  exports: [
    Booklet,
    BookletsService
  ]
})

export class DatabaseModule {}
