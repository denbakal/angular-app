import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Video} from "./video.model";
import {API_URL} from "./video.const";
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  constructor(private http: Http, @Inject(API_URL) private apiUrl) {
  }

  getVideos(): Observable<Array<Video>> {
    return this.http.get(`${this.apiUrl}/videos`)
                    .map(res => res.json().data);
  }
}
