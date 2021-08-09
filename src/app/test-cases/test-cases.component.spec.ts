import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { TestCasesComponent } from './test-cases.component';

describe('TestCasesComponent', () => {
  let component: TestCasesComponent;
  let fixture: ComponentFixture<TestCasesComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestCasesComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(TestCasesComponent);
        component = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  }));

  fit(`it should have content page`, async(() => {
    expect(component.text).toEqual('contact page')
  }))

  fit(`should set submited to true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }))

  fit(`should call on the submited methoed`, async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  fit(`form should be invalid`, async(() => {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));
  // fit(`form should be invalid`, async(() => {
  //   component.contactForm.controls['email'].setValue('mohan@gmail.com');
  //   component.contactForm.controls['name'].setValue('mohan');
  //   component.contactForm.controls['text'].setValue('hii');
  //   expect(component.contactForm.valid).toBeTruthy();
  // }))
});
