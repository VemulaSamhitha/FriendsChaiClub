import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaioncallComponent } from './chaioncall.component';

describe('ChaioncallComponent', () => {
  let component: ChaioncallComponent;
  let fixture: ComponentFixture<ChaioncallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaioncallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaioncallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
