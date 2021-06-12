## Part 1
`yarn add @nestjs/graphql graphql-tools graphql apollo-server-express`

### Generate author
```
nest g module author
nest g resolver author
nest g service author
touch src/author/author.schema.ts
```

### Generate book
```
nest g module book
nest g resolver book
nest g service book
touch src/book/book.schema.ts
```
## Part 2

`yarn add @nestjs/mongoose mongoose`

## Part 3
`nest g resource users`

`yarn add bcrypt jsonwebtoken nanoid cookie-parser`

`yarn add @types/jsonwebtoken @types/nanoid @types/cookie-parser -D`