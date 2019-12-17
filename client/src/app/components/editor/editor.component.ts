import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FileService } from 'src/app/services/file.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  article: any = {title: '', content: ''};
  editor = ClassicEditor;
  @ViewChild('file', {static: false}) fileInput: ElementRef;
  @ViewChild('fileLabel', {static: false}) fileLabel: ElementRef;
  file: File;
  uploading: boolean;
  progress: any;
  canBeFinished: boolean;

  constructor(
    private auth: AuthService,
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private fileService: FileService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(p => {
      if (p.id) {
        const articleId = p.id;
        this.articleService.getArticle(articleId).subscribe(resp => {
          this.article = resp;
        });
      }
    });
  }

  saveAsDraft() {
    this.articleService.saveAsDraft(this.article).subscribe(resp => {
      this.router.navigate(['/articles']);
    }, err => {
      console.log(err);
    });
  }

  post() {
    this.articleService.post(this.article).subscribe(resp => {
      this.router.navigate(['/articles']);
    }, err => {
      console.log(err);
    });
  }

  deletePost() {
    this.articleService.deletePost(this.article._id).subscribe(resp => {
      this.router.navigate(['/articles']);
    });
  }

  onFileChange(list: any) {
    if(list.length <= 0) {
      return;
    }
    console.log(this.fileInput);
    this.file = list[0];
    this.fileLabel.nativeElement.innerHTML = this.file.name;
    console.log(this.fileLabel);
  }

  uploadFile() {
    console.log('Upload', this.file);
    this.uploading = true;
    this.progress = this.fileService.upload(this.file);
    let progressObservables = [];
    for (let key in this.progress) {
      console.log(this.progress);
      progressObservables.push(this.progress[key].progress)
    }
    this.canBeFinished = false;

    forkJoin(progressObservables).subscribe(end => {
      this.canBeFinished = true;
      this.uploading = false;
    });
  }
}
