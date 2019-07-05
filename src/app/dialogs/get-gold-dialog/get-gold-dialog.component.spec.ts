import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGoldDialogComponent } from './get-gold-dialog.component';

describe('GetGoldDialogComponent', () => {
  let component: GetGoldDialogComponent;
  let fixture: ComponentFixture<GetGoldDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetGoldDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetGoldDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
