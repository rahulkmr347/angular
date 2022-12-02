import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = "http://localhost:8081/rahul/registration/user/register"
  private baseUrl1 = "http://localhost:8081/rahul/registration/all/user"
  private baseUrl2 = "http://localhost:8081/rahul/registration/find"
  private baseUrl3 = "http://localhost:8081/rahul/registration/user"
  private baseUrl4 = "http://localhost:8081/rahul/registration/user/delete"
  constructor(private httpClient: HttpClient) { }

  registerUser(user: User):Observable<object>{
    console.log(user)
    return this.httpClient.post(`${this.baseUrl}`, user);
  }

  getAllUser():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl1}`);
  }

  getUserById(userId : number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl2}/${userId}`)

  }

  updateUser(user: User):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl3}/${user.userId}`, user)
  }

  deleteUser(userId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl4}/${userId}`)
  }
}
