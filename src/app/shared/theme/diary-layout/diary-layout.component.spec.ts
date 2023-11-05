import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryLayoutComponent } from './diary-layout.component';

describe('DiaryLayoutComponent', () => {
  let component: DiaryLayoutComponent;
  let fixture: ComponentFixture<DiaryLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiaryLayoutComponent]
    });
    fixture = TestBed.createComponent(DiaryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
