import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-filecomponent.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {


  files!: Set<File>


  constructor(private service: UploadFileService) { }

  ngOnInit() {
  }

  onChanges(event:any) {
    const selectedFiles = <FileList>event.srcElement.files
    const fileNames = []
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name)
      this.files.add(selectedFiles[i])
    }
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, 'http://localhost:8000/upload')
      .subscribe(response => console.log('upload concluido'),
      err => console.log(err)      
      )
    }
    console.log('tester');
    
  }

}
