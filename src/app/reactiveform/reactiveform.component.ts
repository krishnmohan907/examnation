import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  dynamicForm: FormGroup;
  categoryList: any = [];
  isMasterSel:boolean;
  details = {
    middlename: '',
    firstname: '',
    lastname: '',
    adress: '',
    email: '',
    phonenumber: '',
    password: '',
    cources: '',
    male: '',
  };
  submitted = false;
  firstname: any;

  text = 'text content page'
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      firstname: [this.details.firstname, Validators.required],
      middlename: [this.details.middlename, Validators.required],
      lastname: [this.details.lastname, Validators.required],
      adress: [this.details.adress, Validators.required],
      email: [this.details.email, Validators.required],
      phonenumber: [this.details.phonenumber, Validators.required],
      password: [this.details.password, Validators.required],
      cources: [this.details.cources, Validators.required],
      male: [this.details.male, Validators.required]
    })
    this.categoryList = [

      { id: 1, value: 'PHP', isSelected: false },

      { id: 2, value: 'Laravel', isSelected: false },

      { id: 3, value: 'Angular', isSelected: true },

      { id: 4, value: 'React', isSelected: true },

      { id: 5, value: 'Vue', isSelected: true },

      { id: 6, value: 'JQuery', isSelected: false },

      { id: 7, value: 'Javascript', isSelected: false },

    ];
  }

  employeeregisterfoam() {
    this.submitted = true;
    console.log('employee register form', this.dynamicForm.value);
    let obj = {
      firstname: this.dynamicForm.value.firstname,
      middlename: this.dynamicForm.value.middlename,
      lastname: this.dynamicForm.value.lastname,
      adress: this.dynamicForm.value.adress,
      email: this.dynamicForm.value.email,
      phonenumber: this.dynamicForm.value.phonenumber,
      password: this.dynamicForm.value.password,
      cources: this.dynamicForm.value.cources,
      male: this.dynamicForm.value.male,
    }

  }

  isAllSelected() {

  }

  checkUncheckAll() {

  }
}
