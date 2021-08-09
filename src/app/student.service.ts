import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getstudent(){
    return [
      { "name": "John", "age": "23", "city": "Agra" },
      { "name": "Steve", "age": "28", "city": "Delhi" },
      { "name": "Peter", "age": "32", "city": "Chennai" },
      { "name": "Chaitanya", "age": "28", "city": "Bangalore" }
    ]
  }

  constructor() { }
}
