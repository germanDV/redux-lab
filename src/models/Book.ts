import { Author } from './Author'

export type Book = {
  id: string;
  title: string;
  year: number;
  publisherId: string;
  author: string[];
  genres: string[];
}

export type BookWithAuthor = Omit<Book, 'author'> & { author: Author[] }
