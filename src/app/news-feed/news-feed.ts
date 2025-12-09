import { Component, input } from '@angular/core';
import { UserUpdate } from '../../models/userupdates.model';
import { UpdateItem } from '../update-item/update-item';

@Component({
  selector: 'app-news-feed',
  imports: [UpdateItem],
  templateUrl: './news-feed.html',
  styleUrl: './news-feed.css',
})
export class NewsFeed {
  userUpdates = input<UserUpdate[]>([], { alias: 'updates' });
}
