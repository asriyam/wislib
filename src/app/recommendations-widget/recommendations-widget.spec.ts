import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsWidget } from './recommendations-widget';

describe('RecommendationsWidget', () => {
  let component: RecommendationsWidget;
  let fixture: ComponentFixture<RecommendationsWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationsWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationsWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
