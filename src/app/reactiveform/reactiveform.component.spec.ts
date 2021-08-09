import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform.component';
import { DebugElement } from '@angular/core';

describe('ReactiveformComponent', () => {
  let component: ReactiveformComponent;
  let fixture: ComponentFixture<ReactiveformComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReactiveformComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(ReactiveformComponent);
        component = fixture.componentInstance  //create a component instance 

        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  }));

  fit(`should have the text content page`, async(() => {
    expect(component.text).toEqual('text content page');
  }))

  // it(`should set submited to true`, async(() => {
  //   component.employeeregisterfoam();
  //   expect(component.submitted).toBeTruthy();
  // }));


  // it(`should call on submit methoed`, async(() => {
  //   fixture.detectChanges();
  //   spyOn(component, 'employeeregisterfoam');
  //   el = fixture.debugElement.query(By.css('button')).nativeElement;
  //   el.click();
  //   expect(component.employeeregisterfoam).toHaveBeenCalledTimes(0);
  // }));

  // fit(`form should be invalid`, async(() => {
  //   component.dynamicForm.controls['firstname'].setValue('');
  //   component.dynamicForm.controls['middlename'].setValue('');
  //   component.dynamicForm.controls['lastname'].setValue('');
  //   component.dynamicForm.controls['adress'].setValue('');
  //   component.dynamicForm.controls['email'].setValue('');
  //   component.dynamicForm.controls['phonenumber'].setValue('');
  //   component.dynamicForm.controls['password'].setValue('');
  //   component.dynamicForm.controls['cources'].setValue('');
  //   component.dynamicForm.controls['male'].setValue('');
  //   expect(component.dynamicForm.valid).toBeFalsy();
  // }));
});
