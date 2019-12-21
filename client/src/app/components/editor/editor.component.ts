import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SERVER_URL } from 'src/app/config';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  article: any = {title: '', content: ''};
  editor = ClassicEditor;
  editorConfig = {};

  constructor(
    private auth: AuthService,
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute) {

    this.editorConfig = {
      simpleUpload: {
        uploadUrl: `${SERVER_URL}/upload`
      }
    };
  }

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

}
