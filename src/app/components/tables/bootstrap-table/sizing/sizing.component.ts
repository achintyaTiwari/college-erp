import { Component, OnInit } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sizing',
  templateUrl: './sizing.component.html',
  styleUrls: ['./sizing.component.scss']
})
export class SizingComponent implements OnInit {


  modelPopup: NgbDateStruct;


  constructor(public parserFormatter: NgbDateParserFormatter) { }

  ngOnInit() {
  }

  selectToday() {

  	let now = new Date();
    
    this.modelPopup = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

}
