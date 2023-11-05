import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFadeRandomComponent } from './text-fade-random.component';

describe('TextFadeRandomComponent', () => {
  let component: TextFadeRandomComponent;
  let fixture: ComponentFixture<TextFadeRandomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextFadeRandomComponent]
    });
    fixture = TestBed.createComponent(TextFadeRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
