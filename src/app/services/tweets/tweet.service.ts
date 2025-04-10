import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class TweetService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createTweet(content: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/tweets`, { content });
  }

  getTweet(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tweets/${id}`);
  }

  getFeed(): Observable<any> {
    return this.http.get(`${this.apiUrl}/feed`);
  }

  getAllTweets(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tweets`);
  }
}
