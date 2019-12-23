import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { getLocaleFirstDayOfWeek } from '@angular/common';

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
    return this.sanitizer.bypassSecurityTrustHtml(this.digest(article));
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

  private digest(article: any): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(article.content, 'text/html');
    const body = doc.getElementsByTagName('body')[0];
    if (body.children.length >= 1) {
      const first = body.children.item(0);
      return first.innerHTML;
    } else {
      return article.content;
    }
  }

  openedCommentCount(article: any): number {
    const opened = article.comments.filter(comment => !comment.hidden);
    console.log(opened);
    return opened.length;
  }
}
