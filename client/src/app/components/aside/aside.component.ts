import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  topPosts: any[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.topPosts(5).subscribe(resp => { this.topPosts = resp; });
  }

}
