export class BookletsRepository {
  async findAll() {
    let booklets = [
      {
        'id' : 1,
        'name' : 'Mathe'
      },
      {
        'id' : 2,
        'name' : 'Deutsch'
      }
      ]
      return booklets;
  }
}
