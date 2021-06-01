import { Injectable } from '@nestjs/common';
import books from '../data/books';
import { Book, CreateBookInput } from './book.schema';

@Injectable()
export class BookService {
  books: Partial<Book>[];
  constructor() {
    this.books = books;
  }

  async findMany() {
    return this.books;
  }

  async findById(id) {
    const books = this.books.filter((book) => book.id === id);
    if (books.length) {
      return books[0];
    }

    return null;
  }

  async findByAuthorId(authorId) {
    return this.books.filter((book) => book.author === authorId);
  }

  async createBook(book: CreateBookInput) {
    this.books = [book, ...this.books];
    return book;
  }
}
