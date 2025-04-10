import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

  followUser(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/${id}/follow`, {});
  }

  unfollowUser(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/${id}/unfollow`, {});
  }

  getFollowing(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${id}/following`);
  }

  getFollowers(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${id}/followers`);
  }
}
