import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInstrumentDialogComponent } from './new-instrument-dialog.component';

describe('NewInstrumentDialogComponent', () => {
  let component: NewInstrumentDialogComponent;
  let fixture: ComponentFixture<NewInstrumentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInstrumentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInstrumentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
