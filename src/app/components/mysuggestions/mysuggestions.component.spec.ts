import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysuggestionsComponent } from './mysuggestions.component';

describe('MysuggestionsComponent', () => {
  let component: MysuggestionsComponent;
  let fixture: ComponentFixture<MysuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
