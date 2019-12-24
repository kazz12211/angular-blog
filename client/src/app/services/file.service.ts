import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { SERVER_URL } from '../config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }


  upload(data: FormData, name: string, caption: string) {
    const uploadUrl = `${SERVER_URL}/media/files`;

    console.log(name);
    console.log(caption);
    data.append('name', name);
    data.append('caption', caption);

    return this.http.post<any>(uploadUrl, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map( (event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          return {status: 'progress', message: 0};
        case HttpEventType.UploadProgress:
          return {status: 'progress', message: Math.round(100 * event.loaded / event.total)};
        case HttpEventType.ResponseHeader:
          return {status: 'progress', message: 100};
        case HttpEventType.DownloadProgress:
          return {status: 'progress', message: 100};
        case HttpEventType.Response:
          console.log(event.body);
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    }));
  }

  getFiles(page: number, limit: number): Observable<any> {
    return this.http.get(`${SERVER_URL}/media/files?page=${page}&limit=${limit}`);
  }

  getFile(filename: string) {}
}
