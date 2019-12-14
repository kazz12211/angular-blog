import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SERVER_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient, private router: Router) { }

  getArticles(page: number, limit: number, query?: any, order?: any): Observable<any> {
    return this.http.get(`${SERVER_URL}/external/articles?page=${page}&limit=${limit}`);
  }

  getPublishedArticles(page: number, limit: number, query?: any, order?: any): Observable<any> {
    return this.http.get(`${SERVER_URL}/external/articles?page=${page}&limit=${limit}&draft=false`);
  }

  getArticle(id: string): Observable<any> {
    return this.http.get(`${SERVER_URL}/external/article/${id}`);
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
}


