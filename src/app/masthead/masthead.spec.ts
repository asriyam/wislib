import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Masthead } from './masthead';

describe('Masthead', () => {
  let component: Masthead;
  let fixture: ComponentFixture<Masthead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Masthead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Masthead);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
