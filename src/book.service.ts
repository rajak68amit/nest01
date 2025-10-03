import {Book} from "./data/book.dto";
import { Injectable } from '@nestjs/common';
import { v4 as uuid4 } from 'uuid';
@Injectable()
export class BookService {
    private books: Book[] = [];

    // add book
    addBookService(book: Book): string {
        book.id = uuid4();
      this.books.push(book);
      return "Book added successfully";
    }

    // get all books
    UpdateBooksService(id:string,book:Book): string {
        let index = this.books.findIndex(currentBook=>{
        return currentBook.id === book.id
      });
      this.books[index] = book;
      return `Book updated successfully`;
    }


    deleteBookService(bookId:string): string {
      this.books = this.books.filter((book)=>{
        return book.id !== (bookId);
      })
      return `Book deleted successfully`;
    }

    findAllBooksService(): Book[] {
      return this.books;
      // return `Book deleted successfully`;
    }
} 