import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  articles: number = 0;

  constructor(private auth: AuthService, private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.countPost().subscribe(resp => {
      this.articles = resp.count;
    });
  }


}
