import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSuiteComponent } from './card-suite.component';

describe('CardSuiteComponent', () => {
  let component: CardSuiteComponent;
  let fixture: ComponentFixture<CardSuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
