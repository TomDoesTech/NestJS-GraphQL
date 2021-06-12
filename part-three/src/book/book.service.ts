import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import books from '../data/books';
import { Book, CreateBookInput, BookDocument } from './book.schema';

@Injectable()
export class BookService {
  books: Partial<Book>[];
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {
    this.books = books;
  }

  async findMany() {
    return this.bookModel.find().lean();
  }

  async findById(id) {
    return this.bookModel.findById(id).lean();
  }

  async findByAuthorId(authorId) {
    return this.bookModel.find({ author: authorId });
  }

  async createBook(book: CreateBookInput) {
    return this.bookModel.create(book);
  }
}
