import { Module } from '@nestjs/common';
import { BookService } from '../book/book.service';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';

@Module({
  providers: [AuthorResolver, AuthorService, BookService],
})
export class AuthorModule {}
