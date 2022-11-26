import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { BookletsService } from '../services/booklets.service';
import { CreateBookletDto } from '../dtos/create-booklet.dto';
import {UpdateBookletDto} from '../dtos/update-booklet.dto';

@Controller('booklets')
export class BookletsController {
  constructor(
    private readonly bookletsService: BookletsService
  ) { }

  @Get()
  index() {
    return this.bookletsService.findAll();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.bookletsService.find(Number(id));
  }

  @Post()
  async create(@Body() booklet: CreateBookletDto) {
    return this.bookletsService.create(booklet);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() booklet: UpdateBookletDto) {
    return this.bookletsService.update(Number(id), booklet);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.bookletsService.delete(Number(id));
  }



}
