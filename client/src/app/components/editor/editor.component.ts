import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SERVER_URL } from 'src/app/config';
import { ModalService } from 'src/app/services/modal.service';

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
    private route: ActivatedRoute,
    private modalService: ModalService) {

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
    this.modalService.confirm(
      'Delete Confirmation', 
      `Are you sure to delete post "${this.article.title}"`,
      'Delete', 'Cancel').then(ok => {
        if (ok) {
          this.articleService.deletePost(this.article._id).subscribe(resp => {
            this.router.navigate(['/articles']);
          });
        }
      }).catch(err => {
        console.log(err);
      });
  }

}
