import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTweetsComponent } from './all-tweets.component';

describe('AllTweetsComponent', () => {
  let component: AllTweetsComponent;
  let fixture: ComponentFixture<AllTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTweetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
