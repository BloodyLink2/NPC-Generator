import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinketsComponent } from './trinkets.component';

describe('TrinketsComponent', () => {
  let component: TrinketsComponent;
  let fixture: ComponentFixture<TrinketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrinketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
