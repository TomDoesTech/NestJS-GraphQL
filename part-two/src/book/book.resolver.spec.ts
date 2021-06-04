import { Test, TestingModule } from '@nestjs/testing';
import { BookResolver } from './book.resolver';

describe('BookResolver', () => {
  let resolver: BookResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookResolver],
    }).compile();

    resolver = module.get<BookResolver>(BookResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
