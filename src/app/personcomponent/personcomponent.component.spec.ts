import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { PersoncomponentComponent } from './personcomponent.component';

describe('PersonComponent', () => {
  let component: PersoncomponentComponent;
  let fixture: ComponentFixture<PersoncomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PersoncomponentComponent]
    });
    fixture = TestBed.createComponent(PersoncomponentComponent);
    component = fixture.componentInstance;
  });

  it('should bind the configured value', async(() => {
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.select-profile')).nativeElement;
    let p = fixture.debugElement.nativeElement.querySelector('p');
    fixture.detectChanges();
    component.selectedProfile = new FormControl(component.profiles[1]);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let text = select.options[select.selectedIndex].label;
      expect(text).toBe('Manager');
      expect(p.textContent).toBe('Manager');
    });
  }));

  it('should change the value on selection change', async(() => {
    fixture.detectChanges();
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.select-city')).nativeElement;
    select.value = select.options[2].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let text = select.options[select.selectedIndex].label;
      expect(text).toBe('Tawang');
    });
  }));

  it('should execute the component method on change', fakeAsync(() => {
    fixture.detectChanges();
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.select-city')).nativeElement;
    spyOn(component, 'onCityChange');
    select.value = select.options[2].value;
    select.dispatchEvent(new Event('change'));
    tick();
    expect(component.onCityChange).toHaveBeenCalled();
  }));  

  it('should click Set button', async(() => {
    fixture.detectChanges();
    let buttonElement = fixture.debugElement.query(By.css('.set-button'));
    let p = fixture.debugElement.nativeElement.querySelector('p');

    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.personName).toBe('Mahesh');
      expect(p.textContent).toBe('Mahesh');
    });
  }));

  it('should click Send button with async', async(() => {
    let buttonElement = fixture.debugElement.query(By.css('.send-button'));
    
    spyOn(component, 'sendData');
    //Trigger click event after spyOn
    buttonElement.triggerEventHandler('click', null);

    fixture.whenStable().then(() => {
      expect(component.sendData).toHaveBeenCalled();
    });
  }));  

  it('should click Send button with fakeAsync', fakeAsync(() => {
    let buttonElement = fixture.debugElement.query(By.css('.send-button'));
    
    spyOn(component, 'sendData');
    //Trigger click event after spyOn
    buttonElement.triggerEventHandler('click', null);
    
    tick();
    expect(component.sendData).toHaveBeenCalled();
  }));   

  it('should click Edit button', fakeAsync(() => {
    let buttonElement = fixture.debugElement.query(By.css('.edit-button'));
    
    spyOn(component, 'editPerson');
    //Trigger click event after spyOn
    buttonElement.triggerEventHandler('click', null);
    
    tick();
    expect(component.editPerson).toHaveBeenCalled();
  }));  
}); 