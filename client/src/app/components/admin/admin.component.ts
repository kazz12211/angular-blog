import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  articles = 0;
  topPosts: any[] = [];
  users: any[] = [];
  recentComments: any[] = [];

  constructor(
    private articleService: ArticleService,
    private userService: UserService,
    private auth: AuthService) { }

  ngOnInit() {
    this.articleService.countPost().subscribe(resp => {
      this.articles = resp.count;
    });
    this.articleService.topPosts(10).subscribe(resp => {
      this.topPosts = resp;
    });
    this.articleService.recentComments(10).subscribe(resp => {
      this.recentComments = resp;
    });
    this.userService.getUsers(0, 10).subscribe(resp => {
      this.users = resp.rows;
    });
  }

}
