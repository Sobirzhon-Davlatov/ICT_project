import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyStuffComponent } from './study-stuff.component';

describe('StudyStuffComponent', () => {
  let component: StudyStuffComponent;
  let fixture: ComponentFixture<StudyStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
