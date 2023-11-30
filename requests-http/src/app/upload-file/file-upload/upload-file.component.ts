import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { delay, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { filterResponse, uploadProgress } from 'src/app/shared/rxjs-operators';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-filecomponent.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {


  files?: Set<File>
  progress = 0;

  constructor(private service: UploadFileService) { }

  ngOnInit() {
  }

  onChanges(event:any) {
    this.files = new Set();
    const fileNames = []
    const selectedFiles = <FileList>event.srcElement.files
    

    for (let i = 0; i < selectedFiles.length; i++) {
      this.files.add(selectedFiles[i])
      fileNames.push(selectedFiles[i].name)
    }
    console.log(fileNames);
    this.progress = 0;
  }

  onUpload() {
    if (this.files && this.files.size > 0 ) {
      // this.service.upload(this.files, 'http://localhost:8000/upload')
      this.service.upload(this.files, `${environment.BASE_URL}/upload`)
      .pipe(
        uploadProgress(progress => {
          console.log(progress);
          this.progress = progress
          
        }),
        filterResponse()
      )
      .subscribe(response => console.log('Upload concluido'))
      // .subscribe((event: HttpEvent<Object>) => {
      //   //HttpEventType
      //   // console.log(event);        
      //   if (event.type === HttpEventType.Response) {
      //   }else if(event.type === HttpEventType.UploadProgress){
      //     const percentDone = Math.round((event.loaded * 100) / <number>event.total)
      //     // console.log('Progresso',percentDone);
      //     this.progress = percentDone
      //   }
       
      // },
      // err => console.log(err)      
      // )      
    }
  
    
    
  }

}
