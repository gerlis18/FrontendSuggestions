import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgPersonComponent } from './sg-person.component';

describe('SgPersonComponent', () => {
  let component: SgPersonComponent;
  let fixture: ComponentFixture<SgPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
