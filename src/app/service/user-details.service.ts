import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'assets/data.json';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url);
  }
}
