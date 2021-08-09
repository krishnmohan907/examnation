import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-cases',
  templateUrl: './test-cases.component.html',
  styleUrls: ['./test-cases.component.css']
})
export class TestCasesComponent implements OnInit {
  contactForm: FormGroup
  text = 'contact page';
  contact = {
    name: '',
    email: '',
    text: ''
  }
  submitted = false;
  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm() {
    this.contactForm = new FormGroup({
      'name': new FormControl(this.contact.name, [Validators.required, Validators.minLength(10)]),
      'email': new FormControl(this.contact.email, [Validators.required, Validators.email]),
      'text': new FormControl(this.contact.text, [Validators.required])
    })
  }


  onSubmit() {
    this.submitted = true;
  }
}
