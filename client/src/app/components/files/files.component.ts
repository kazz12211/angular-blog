import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  form: FormGroup;
  error: string;
  uploadResponse = { status: '', message: '', filePath: ''};
  page = {};
  currentPage = 0;
  limit = 5;
  selectedMedia: any;
  @ViewChild('fileLabel', {static: false}) fileLabel: ElementRef;

  constructor(
    private formBuilder: FormBuilder, 
    private fileService: FileService,
    private modalService: ModalService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      file: [''],
      name: '',
      caption: ''
    });
    this.loadFiles();
  }

  private loadFiles() {
    this.fileService.getFiles(this.currentPage, this.limit).subscribe(page => {
      this.page = page;
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file').setValue(file);
      this.fileLabel.nativeElement.innerHTML = file.name;
    }
  }

  uploadFile() {
    console.log(this.form);
    const formData = new FormData();
    formData.append('file', this.form.get('file').value, this.form.get('file').value.name);

    this.fileService.upload(formData, this.form.get('name').value, this.form.get('caption').value).subscribe(res => {
      this.uploadResponse = res;
      this.form.reset();
    }, err => {
      console.error(err);
      this.error = err;
    });
  }

  fileURL(media) {
    return `/media/file/${media.filename}`;
  }

  prevPage() {
    this.currentPage--;
    this.loadFiles();
  }

  nextPage() {
    this.currentPage++;
    this.loadFiles();
  }

  deleteMedia(media) {
    this.selectedMedia = media;
    this.modalService.confirm('Delete Confirmation', `Are you sure to delete file "${media.name}"`, 'Delete', 'Cancel').then(ok => {
      if (ok) {
        const filename = this.selectedMedia.filename;
        this.fileService.deleteFile(filename).subscribe(result => {
          this.loadFiles();
        }, err => {
          console.log(err);
        });
      }
    }).catch(err => {

    });
  }

}
