import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgTalksComponent } from './sg-talks.component';

describe('SgTalksComponent', () => {
  let component: SgTalksComponent;
  let fixture: ComponentFixture<SgTalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgTalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
