import { Component, input } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookCard } from '../book-card/book-card';

@Component({
  selector: 'app-currently-reading-shelf',
  imports: [BookCard],
  templateUrl: './currently-reading-shelf.html',
  styleUrl: './currently-reading-shelf.css',
})
export class CurrentlyReadingShelf {
  books = input<Book[]>([], { alias: 'books' });
}
