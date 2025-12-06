import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book, SortDirection, SortState } from './../models/book.model';

@Component({
  selector: 'th[app-sortable-header]',
  imports: [],
  templateUrl: './sortable-header.html',
  styleUrl: './sortable-header.scss',
  standalone: true,
  host: {
    '[class]': '"px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider sortable-column"',
    '(click)': 'sortClicked.emit(column)'
  }
})
export class SortableHeader {
  @Input() column!: keyof Book;
  @Input() currentSortState!: SortState;
  @Output() sortClicked = new EventEmitter<keyof Book>();

  getSortIcon() {
    if (this.currentSortState.column != this.column) return '';
    return this.currentSortState.direction === SortDirection.Asc ? '▲' : '▼';
  }
} 
