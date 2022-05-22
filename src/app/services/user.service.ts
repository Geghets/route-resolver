import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "../users/lib/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  find(id: number) {
    return this.http.get<UserInterface>(this.url + '/' + id);
  }
}
