import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  article: any = {title: '', content: '', tags: [], author: {}};
  comment: any = {writer: '', email: '', content: ''};
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.queryParams.subscribe(p => {
      if (p.id) {
        this.articleService.getPost(p.id).subscribe(resp => {
          this.article = resp;
        });
      }
    });
  }

  sanitizedContent(content): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  like(article: any) {
    /*
    this.articleService.likePost(article._id).subscribe(resp => {});
    */
  }

  postComment() {
    this.articleService.addComment(this.article._id, this.comment).subscribe(resp => {
      this.article = resp;
    });
  }
}
