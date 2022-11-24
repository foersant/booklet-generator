import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { BookletsService } from '../services/booklets.service';
import { CreateBookletDto } from '../dtos/create-booklet.dto';

@Controller('booklets')
export class BookletsController {
  bookletsService: BookletsService;
  constructor() {
    this.bookletsService = new BookletsService()
  }

  @Get()
  index() {
    return this.bookletsService.findAll();
  }
}
