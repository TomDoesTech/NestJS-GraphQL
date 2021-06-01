import { Module } from '@nestjs/common';
import { AuthorService } from 'src/author/author.service';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';

@Module({
  providers: [BookResolver, BookService, AuthorService],
})
export class BookModule {}
