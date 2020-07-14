import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsPageComponent } from './instruments-page.component';

describe('InstrumentsPageComponent', () => {
  let component: InstrumentsPageComponent;
  let fixture: ComponentFixture<InstrumentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
