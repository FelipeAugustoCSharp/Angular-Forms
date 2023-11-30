import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { delay, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-filecomponent.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {


  files?: Set<File>


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
    
  }

  onUpload() {
    if (this.files && this.files.size > 0 ) {
      // this.service.upload(this.files, 'http://localhost:8000/upload')
      this.service.upload(this.files, `${environment.BASE_URL}/upload`)
      .pipe(
        delay(500), 
        take(1)
      )
      .subscribe(response => console.log('upload concluido'),
      err => console.log(err)      
      )      
    }
  
    
    
  }

}
