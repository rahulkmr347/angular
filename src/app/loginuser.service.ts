import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private baseUrl="http://localhost:8081/rahul/login/user/login"
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User):Observable<User>{
    console.log(user)
    return this.httpClient.put<User>(`${this.baseUrl}`, user);
  }
}
