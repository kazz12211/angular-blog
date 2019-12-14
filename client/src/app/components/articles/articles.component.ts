import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  page: any = {};

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles(0, 10).subscribe(result => {
      console.log(result);
      this.page = result;
    }, err => {
      console.log(err);
    });
  }

}
