import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { delay, tap } from 'rxjs';

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
    console.log('fora do for',fileNames);
    
  }

  onUpload() {
    if (this.files && this.files.size > 0 ) {
      this.service.upload(this.files, 'http://localhost:8000/upload')
      .pipe(
        delay(500),
        tap(() => console.log('testyando'))        
      )
      .subscribe(response => console.log('upload concluido'),
      err => console.log(err)      
      )      
    }
  
    
    
  }

}
