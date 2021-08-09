import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-personcomponent',
  templateUrl: './personcomponent.component.html',
  styleUrls: ['./personcomponent.component.css']
})
export class PersoncomponentComponent implements OnInit {
  profiles = [
    { id: 'dev', name: 'Developer' },
    { id: 'man', name: 'Manager' },
    { id: 'dir', name: 'Director' }
  ];
  cities = [
    { id: 'kcp', name: 'Kanchipuram' },
    { id: 'prg', name: 'Prayagraj' },
    { id: 'twg', name: 'Tawang' }
  ];

  
  constructor() { }

  ngOnInit(): void {
  }
  selectedProfile = new FormControl(this.profiles[0]);
  selectedCity = new FormControl(this.cities[0]);
  onProfileChange() {
    console.log(this.selectedProfile.value.id);
  }
  onCityChange() {
    console.log(this.selectedCity.value.id);
  }

  personName: string;
  setName() {
    this.personName = 'Mahesh';
  }  
  sendData() {
    console.log('---sendData---');
    //Call Service to send data over HTTP
  }
  editPerson(id: number) {
    console.log('---editPerson---', id);
    //Call Service to send data over HTTP
  } 

}
