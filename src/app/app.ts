import { Component, signal, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

import bookList from './../assets/books-list.json';
import { Book } from '../models/book.model';

import userdata from './../assets/user-data.json';
import { User } from '../models/user.model';

import userupdates from './../assets/userupdates.json';
import { UserUpdate } from '../models/userupdates.model';

import { Masthead } from './masthead/masthead';
import { CurrentlyReadingShelf } from "./currently-reading-shelf/currently-reading-shelf";
import { RecommendationsWidget } from "./recommendations-widget/recommendations-widget";
import { NewsFeed } from "./news-feed/news-feed";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Masthead, CurrentlyReadingShelf, RecommendationsWidget, NewsFeed, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('wislibv2');
  isRouteActive = signal(false);

  private originalBooks: Book[] = bookList.library_catalog;
  displayedBooks: Book[] = [];
  currentlyReadingShelfData: Book[] = [];
  recommendedBooks: Book[] = [];

  userUpdates: UserUpdate[] = userupdates;

  constructor(private router: Router) {}

  ngOnInit() {
    this.displayedBooks = [...this.originalBooks];
    this.currentlyReadingShelfData = [this.displayedBooks[0], this.displayedBooks[1], this.displayedBooks[2]];
    this.recommendedBooks = [this.displayedBooks[3], this.displayedBooks[4]];

    // Track route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isRouteActive.set(event.url !== '/');
      });
  }

  /*  onSort(column: keyof Book) {
      if (this.sortState.column == column)
        this.sortState.direction = this.sortState.direction == SortDirection.Asc ? SortDirection.Desc : SortDirection.Asc;
      else
        this.sortState.direction = SortDirection.Asc;
  
      this.sortState.column = column;
  
      this.displayedBooks.sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];
  
        let comparisonResult = 0;
        if (typeof valueA == 'string' && typeof valueB == 'string') {
          comparisonResult = valueA.localeCompare(valueB);
        } else if (valueA > valueB) {
          comparisonResult = 1;
        } else if (valueA < valueB) {
          comparisonResult = -1;
        }
        return this.sortState.direction == SortDirection.Desc ? -1 * comparisonResult : comparisonResult;
      });
    }*/
}
