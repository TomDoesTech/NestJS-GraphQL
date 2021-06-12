import { get, set } from 'lodash';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { decode } from './utils/jwt.utils';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-graphql'),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req, res }) => {
        // Get the cookie from request
        const token = get(req, 'cookies.token');

        console.log({ token });
        // Verify the cookie

        const user = token ? decode(get(req, 'cookies.token')) : null;

        // Attach the user object to the request object
        if (user) {
          set(req, 'user', user);
        }

        return { req, res };
      },
    }),

    AuthorModule,
    BookModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
