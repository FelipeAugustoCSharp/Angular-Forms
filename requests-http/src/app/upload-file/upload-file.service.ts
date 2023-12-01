import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

constructor(private http: HttpClient) { }

  upload(files:Set<File>, url: string){
    const formData = new FormData();
    files.forEach(file => formData.append('file', file, file.name))
    // const request = new HttpRequest('POST', url, formData)
    // return this.http.request(request);
    return this.http.post(url, formData, {
      observe: 'events',
      reportProgress: true
    })
  }
  
  download(url:string){
    return this.http.get(url, {
      responseType: 'blob' as 'json',
    })
  }
}
