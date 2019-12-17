import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { SERVER_URL } from '../config';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  upload(file: File) : { [key: string]: {progress: Observable<number>} } {
    const status: { [key: string] : {progress: Observable<number>}} = {};

    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.set('enctype', 'multipart/form-data');

    const req = new HttpRequest('POST', `${SERVER_URL}/upload`, formData, {
      reportProgress: true
    });

    const progress = new Subject<number>();
    this.http.request(req).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * event.loaded / event.total);
        progress.next();
      } else if (event instanceof HttpResponse) {
        progress.complete();
      }
      status[file.name] = {
        progress: progress.asObservable()
      };
    });
    return status;
  }

  getFile(filename: string) {}
}
