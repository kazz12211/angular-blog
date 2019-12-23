import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(page: number, limit: number, query?: any, order?: any): Observable<any> {
    return this.http.get(`${SERVER_URL}/external/articles?page=${page}&limit=${limit}`);
  }

  getPublishedArticles(page: number, limit: number, query?: any, order?: any): Observable<any> {
    return this.http.get(`${SERVER_URL}/external/posts?page=${page}&limit=${limit}`);
  }

  getArticle(id: string): Observable<any> {
    return this.http.get(`${SERVER_URL}/external/article/${id}`);
  }

  getPost(id: string): Observable<any> {
    return this.http.get(`${SERVER_URL}/external/post/${id}`);

  }

  post(article: any): Observable<any> {
    return this.http.post(`${SERVER_URL}/external/articles`, article);
  }

  saveAsDraft(article: any): Observable<any> {
    return this.http.post(`${SERVER_URL}/external/articles/save`, article);
  }

  deletePost(id: any): Observable<any> {
    return this.http.delete(`${SERVER_URL}/external/articles/${id}`);
  }

  countPost(): Observable<any> {
    return this.http.get(`${SERVER_URL}/external/articles/count`);
  }

  topPosts(limit: number): Observable<any[]> {
    return this.http.get<any[]>(`${SERVER_URL}/external/posts/top?limit=${limit}`);
  }

  likePost(id: any): Observable<any> {
    return this.http.get(`${SERVER_URL}/external/post/${id}/like`);
  }

  addComment(id: any, comment: any): Observable<any> {
    return this.http.post(`${SERVER_URL}/external/post/${id}/comment`, comment);
  }

  getComments(page: number, limit: number, query?: any, order?: any): Observable<any> {
    return this.http.get(`${SERVER_URL}/external/comments?page=${page}&limit=${limit}`);
  }

  recentComments(limit: number): Observable<any[]> {
    return this.http.get<any[]>(`${SERVER_URL}/external/comments/recent?limit=${limit}`);
  }

  showHideComment(id: string, hidden: boolean): Observable<any> {
    return this.http.put(`${SERVER_URL}/external/comments/showhide/${id}`, {hidden: hidden});
  }
}


