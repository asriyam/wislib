import { Component, input } from '@angular/core';
import { UserUpdate } from '../../models/userupdates.model';
import { BookCard } from '../book-card/book-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-item',
  imports: [BookCard, CommonModule],
  templateUrl: './update-item.html',
  styleUrl: './update-item.css',
})
export class UpdateItem {
  update = input.required<UserUpdate>();
  parseInt = parseInt;
}
