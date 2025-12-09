import { Component, input } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookCard } from '../book-card/book-card';

@Component({
  selector: 'app-recommendations-widget',
  imports: [BookCard],
  templateUrl: './recommendations-widget.html',
  styleUrl: './recommendations-widget.css',
})
export class RecommendationsWidget {
  books = input<Book[]>([], { alias: 'books' });
}
