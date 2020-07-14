import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentDialogComponent } from './instrument-dialog.component';

describe('InstrumentDialogComponent', () => {
  let component: InstrumentDialogComponent;
  let fixture: ComponentFixture<InstrumentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
