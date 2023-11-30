import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

constructor(private http: HttpClient) { }

upload(Files:Set<File>, url: string){

  const formData = new FormData();
  Files.forEach(file => formData.append('file', file, file.name))
  //const request = new HttpRequest('POST', url, formData)
  //return this.http.request(request);
  return this.http.post(url, formData)
}

}
