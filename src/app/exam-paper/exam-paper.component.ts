import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.css']
})
export class ExamPaperComponent implements OnInit {
  templateUnchecked = false;
  templateChecked = true;
  template = true;
  name = "mohan";
  constructor() { }

  ngOnInit(): void {

  }
  getCheckboxesValue() {

  }
}
