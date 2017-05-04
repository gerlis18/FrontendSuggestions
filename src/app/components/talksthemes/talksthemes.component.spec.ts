import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksthemesComponent } from './talksthemes.component';

describe('TalksthemesComponent', () => {
  let component: TalksthemesComponent;
  let fixture: ComponentFixture<TalksthemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksthemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksthemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
