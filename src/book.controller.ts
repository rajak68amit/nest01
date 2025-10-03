import { Controller, Get,Post,Put,Delete, Body, Param } from '@nestjs/common';
import { BookService } from './book.service';
import  type { Book } from './data/book.dto';
@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}



   // update book
  @Put('/update/:id')
  updateBook(@Param('id') id: string, @Body() book: Book) : string {
    return this.bookService.UpdateBooksService(id,book); // changed BookService to bookService
  }

  // get all books
  @Get('/findAll')
  getAllBooks() :Book[] {
    return this.bookService.findAllBooksService();
  }

  // delete book

  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId : string) : string {
    return this.bookService.deleteBookService(bookId);
  }


  // add book
  @Post('/add')
  addBook(@Body() book : Book) : string {
    return this.bookService.addBookService(book);
  }


}
