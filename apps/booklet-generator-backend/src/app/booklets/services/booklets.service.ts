import { InjectRepository } from '@nestjs/typeorm';
import BookletEntity from '../entities/booklet.entity';
import {Repository} from 'typeorm';
import Booklet from '../entities/booklet.entity';
import { CreateBookletDto } from '../dtos/create-booklet.dto';
import {HttpException, HttpStatus} from '@nestjs/common';
import {UpdateBookletDto} from '../dtos/update-booklet.dto';

export class BookletsService {
  constructor(
    @InjectRepository(Booklet)
    private bookletsRepository: Repository<BookletEntity>
  ) {

    }

  findAll() {
    return this.bookletsRepository.find();
  }

  async find(id: number) {
      const booklet = this.bookletsRepository.findOneBy({id: id});
      if(booklet) {
        return booklet;
      }
      throw new HttpException('Booklet not found', HttpStatus.NOT_FOUND);
  }

  async create(booklet: CreateBookletDto) {
    const newBooklet = await this.bookletsRepository.create(booklet);
    await this.bookletsRepository.save(newBooklet);
    return newBooklet;
  }

  async update(id: number, booklet: UpdateBookletDto) {
    await this.bookletsRepository.update(id, booklet);
    const updatedBooklet = await this.bookletsRepository.findOneBy({id: id});
    if(updatedBooklet) {
      return updatedBooklet
    }
    throw new HttpException('Booklet not found', HttpStatus.NOT_FOUND);
  }

  async delete(id: number) {
    const deleteBooklet = await this.bookletsRepository.delete(id);
    if(!deleteBooklet.affected) {
      throw new HttpException('Booklet not found', HttpStatus.NOT_FOUND);
    }
  }

}
