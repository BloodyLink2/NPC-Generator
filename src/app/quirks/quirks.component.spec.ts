import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuirksComponent } from './quirks.component';

describe('QuirksComponent', () => {
  let component: QuirksComponent;
  let fixture: ComponentFixture<QuirksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuirksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuirksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
