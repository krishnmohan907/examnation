import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPaperComponent } from './exam-paper.component';

describe('ExamPaperComponent', () => {
  let component: ExamPaperComponent;
  let fixture: ComponentFixture<ExamPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExamPaperComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  fit(`should have a title angular unit Testing`, async(() => {
    const fixture = TestBed.createComponent(ExamPaperComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.name).toEqual('mohan');
  }));
});
