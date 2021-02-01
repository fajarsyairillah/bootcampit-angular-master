import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel } from '../model/data.model';
import { ExampleUserModel } from '../model/example.user.model';
import { environment } from '../../../environments/environment';
import { ExamplelastTweetModel } from '../model/example.lastTweet.model';

@Injectable()
export class TwitterService {

  baseUrl = 'https://api.twitter.com/2';
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${environment.bearerToken}`,
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) {
  }

  getUserExample(): Observable<DataModel<ExampleUserModel>> {
    const url = `${this.baseUrl}/users/by/username/bni?user.fields=name,profile_image_url,username`;

    return this.http.get<DataModel<ExampleUserModel>>(url, this.httpOptions);
  }


  getTenTweetExample(): Observable<DataModel<ExamplelastTweetModel>>{
    const url = `${this.baseUrl}/users/bni/tweets?tweet.fields=created_at,author_id,conversation_id,public_metrics,context_annotations&user.fields=username&expansions=author_id&max_results=10`

    return this.http.get<DataModel<ExamplelastTweetModel>>(url, this.httpOptions);
   }
}
