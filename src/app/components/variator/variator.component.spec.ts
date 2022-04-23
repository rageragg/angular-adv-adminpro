import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariatorComponent } from './variator.component';

describe('VariatorComponent', () => {
  let component: VariatorComponent;
  let fixture: ComponentFixture<VariatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
