import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroUserCircle, heroBars3, heroMagnifyingGlass } from '@ng-icons/heroicons/outline';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-masthead',
  standalone: true,
  imports: [NgIcon, CommonModule, FormsModule],
  providers: [provideIcons({ heroUserCircle, heroBars3, heroMagnifyingGlass })],
  templateUrl: './masthead.html',
  styleUrl: './masthead.css',
})
export class Masthead {
  isMenuOpen = signal(false);
  searchQuery = signal('');

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  onSearch() {
    const query = this.searchQuery().trim();
    if (query) {
      this.router.navigate(['/search'], { queryParams: { q: query } });
      this.searchQuery.set('');
    }
  }

  onSearchKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
