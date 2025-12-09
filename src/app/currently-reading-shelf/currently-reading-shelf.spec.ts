import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyReadingShelf } from './currently-reading-shelf';

describe('CurrentlyReadingShelf', () => {
  let component: CurrentlyReadingShelf;
  let fixture: ComponentFixture<CurrentlyReadingShelf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentlyReadingShelf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentlyReadingShelf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
