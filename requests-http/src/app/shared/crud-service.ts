import { HttpClient } from "@angular/common/http";
import { Subject, delay, take, tap } from "rxjs";
// import { environment } from "src/environments/environment";


export class CrudService<T> {
    constructor(
        protected http: HttpClient,
        private API_URL: any) { }

     //private readonly API:string = `${environment.API}records`

  list(API: string){
    return this.http.get<T[]>(this.API_URL)
    .pipe(
      delay(1000),
      tap(console.log)
    )
  }
  
  loadById(id:number){
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1))
  }

  private create(record: T){
    return this.http.post(this.API_URL, record).pipe(take(1))
  }
  remove(id:number){
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1))
  }
  private update(record:any){
    return this.http.put(`${this.API_URL}/${record.id}`, record).pipe(take(1))
  }
  save(record:any){
    if(record.id){
      return this.update(record)
    }
    return this.create(record)
  }

}
