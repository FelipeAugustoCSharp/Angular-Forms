import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.css']
})
export class LibSearchComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {    
  }

  queryField = new FormControl()

  onSearch() {
    console.log(this.queryField.value);
}

}
