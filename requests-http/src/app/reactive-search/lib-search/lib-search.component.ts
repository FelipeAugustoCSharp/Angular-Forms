import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.css']
})
export class LibSearchComponent implements OnInit {
  
  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$!: Observable<any>;
  total!:number;
  readonly CAMPOS = '=name,description,version,homepage'
  

  constructor(private http : HttpClient) { }

  ngOnInit() { 
    this.results$ = this.queryField.valueChanges
    .pipe(
      map(res => res.trim()),
      filter(value => value.length > 1),  
      debounceTime(150),    
      distinctUntilChanged(),
      //tap(value => console.log(value)),
      switchMap(value => this.http.get(this.SEARCH_URL,{
        params: {
          search: value,
          fields: this.CAMPOS
        }
      })),
      tap((res: any) => this.total = res.total),
      map((res:any) =>  res.results )
    )
  }


  onSearch() {
    console.log(this.queryField.value);  
    let value = this.queryField.value
    if (value && (value = value.trim() !== '')) {
    // this.results$ = this.http.get(`${this.SEARCH_URL}?search=angular`)
    
    const params_ = {
      search: value,
      fields: this.CAMPOS
    };
    let params = new HttpParams();
    params = params.set('search', value);
    params = params.set('fields', this.CAMPOS)

    this.results$ = this.http
    .get(`${this.SEARCH_URL}`, {params})  
    .pipe(
      tap((res:any) => {
        this.total = res.total
        console.log(res);        
      }),
      map((res:any) => res.results)  //regex to version: ^[0-9]{1}.[0-9]{1}.[0-9]{1}$
    )
  }
}

}
