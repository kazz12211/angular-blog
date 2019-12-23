import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  page: any = {};

  constructor(
    private articleService: ArticleService,
    private auth: AuthService) { }

  ngOnInit() {
    this.articleService.getComments(0, 10).subscribe(result => {
      this.page = result;
    }, err => {
      console.log(err);
    });
  }

  showHide(comment: any) {
    this.articleService.showHideComment(comment._id, !comment.hidden).subscribe(result => {
      console.log(result);
    });
  }
}
