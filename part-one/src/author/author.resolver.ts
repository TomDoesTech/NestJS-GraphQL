import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { BookService } from '../book/book.service';
import { Author } from './author.schema';
import { AuthorService } from './author.service';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(
    private authorsService: AuthorService,
    private bookService: BookService,
  ) {}

  @Query(() => [Author])
  async authors() {
    return this.authorsService.findMany();
  }

  @ResolveField()
  async books(@Parent() parent: Author) {
    return this.bookService.findByAuthorId(parent.id);
  }
}
