import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdoughnutComponent } from './gdoughnut.component';

describe('GdoughnutComponent', () => {
  let component: GdoughnutComponent;
  let fixture: ComponentFixture<GdoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdoughnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GdoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
