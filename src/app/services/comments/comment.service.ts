import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createComment(tweetId: number, content: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/tweets/${tweetId}/comments`, {
      content,
    });
  }
  getComments(tweetId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tweets/${tweetId}/comments`);
  }
}
