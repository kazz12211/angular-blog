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
  article: any = {title:'', content:'', tags:[], author:{}};

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

  sanitizedContent(article): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(article.content);
  }

}
