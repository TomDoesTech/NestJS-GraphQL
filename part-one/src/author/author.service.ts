import { Injectable } from '@nestjs/common';
import authors from '../data/authors';

@Injectable()
export class AuthorService {
  async findById(id) {
    const result = authors.filter((item) => item.id === id);

    return result.length ? result[0] : null;
  }

  async findMany() {
    return authors;
  }
}
