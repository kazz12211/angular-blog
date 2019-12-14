import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page: any = {};

  constructor(private articleService: ArticleService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.articleService.getPublishedArticles(0, 5, {}, []).subscribe(resp => {
      this.page = resp;
    });
  }

  sanitizedContent(article): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(article.content);
  }

  prevPage() {
    const p = this.page.page - 1;
    this.articleService.getPublishedArticles(p, 5, {}, []).subscribe(resp => {
      this.page = resp;
    });
  }

  nextPage() {
    const p = this.page.page + 1;
    this.articleService.getPublishedArticles(p, 5, {}, []).subscribe(resp => {
      this.page = resp;
    });
  }
}
