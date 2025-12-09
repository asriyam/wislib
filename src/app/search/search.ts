import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';
import bookList from '../../assets/books-list.json';
import { BookCard } from '../book-card/book-card';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, BookCard],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit {
  searchQuery = signal('');
  searchResults = signal<Book[]>([]);
  isLoading = signal(false);

  private allBooks: Book[] = bookList.library_catalog;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const query = params['q'] || '';
      this.searchQuery.set(query);
      this.performSearch(query);
    });
  }

  performSearch(query: string) {
    if (!query.trim()) {
      this.searchResults.set([]);
      return;
    }

    this.isLoading.set(true);

    // Simulate API delay
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      const results = this.allBooks.filter(book =>
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery) ||
        book.description.toLowerCase().includes(lowerQuery)
      );
      this.searchResults.set(results);
      this.isLoading.set(false);
    }, 300);
  }
}
