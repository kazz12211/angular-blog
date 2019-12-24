import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterContentInit, AfterViewInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit{
  
  page: any = {};
  currentPage = 0;
  limit = 24;
  selectedMedia: any;
  @ViewChild('photo', {static: false}) img: ElementRef;

  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.fileService.getFiles(this.currentPage, this.limit).subscribe(page => {
      this.page = page;
      this.selectedMedia = this.page.rows[0];
    });
  }

  ngAfterViewInit() {
    this.select(this.page.rows[0]);
  }

  fileURL(media) {
    return `/media/file/${media.filename}`;
  }

  prevPage() {
    this.currentPage--;
    this.fileService.getFiles(this.currentPage, this.limit).subscribe(page => {
      this.page = page;
    })
  }

  nextPage() {
    this.currentPage++;
    this.fileService.getFiles(this.currentPage, this.limit).subscribe(page => {
      this.page = page;
    });
  }

  select(media) {
    this.img.nativeElement.style.opacity = 0.3;
    setTimeout(() => {
      this.selectedMedia = media;
      this.img.nativeElement.style.opacity = 1;  
    }, 500);
  }
}
