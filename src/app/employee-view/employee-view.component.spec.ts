import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { ExamsectionService } from '../examsection.service';
import { EmployeeViewComponent } from './employee-view.component';
import { delay } from "rxjs/operators";


describe('EmployeeViewComponent', () => {
  let component: EmployeeViewComponent;
  let fixture: ComponentFixture<EmployeeViewComponent>;
  let service: ExamsectionService

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        EmployeeViewComponent
      ],
      imports: [
        BrowserModule,
        FormGroup,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [
        ExamsectionService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getpostDetails and return []', () => {
    let fixture = TestBed.createComponent(EmployeeViewComponent);
    let component = fixture.debugElement.componentInstance;
    let examservice = fixture.debugElement.injector.get(ExamsectionService);

    let stub = spyOn(examservice, "getuserdata").and.callFake(() => {
      return of([]).pipe(delay(300))
    })

    component.getEmployeedata();

    expect(component.submitlogin).toEqual([]); 
  })
});

