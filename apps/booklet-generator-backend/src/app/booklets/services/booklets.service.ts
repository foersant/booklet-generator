import { BookletsRepository } from '../repositories/booklets.respository';

export class BookletsService {
  bookletsRepository: BookletsRepository;

  constructor() {
    this.bookletsRepository = new BookletsRepository();
  }

  findAll() {
    return this.bookletsRepository.findAll();
  }
}
