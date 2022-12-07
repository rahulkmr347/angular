import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserJobDetails } from './user-job-details';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private baseUrl="http://localhost:8081/rahul/login/user/login"
  private baseUrl1="http://localhost:8081/rahul/details/all-user-details"
  private baseUrl2="http://localhost:8081/rahul/details/user-delete/delete"
  private baseUrl3="http://localhost:8081/rahul/details/add-detail"
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User):Observable<User>{
    console.log(user)
    return this.httpClient.put<User>(`${this.baseUrl}`, user);
  }

  getAllUserJobDetails(userId:number):Observable<UserJobDetails[]>{
    return this.httpClient.get<UserJobDetails[]>(`${this.baseUrl1}/${userId}`);
  }

  deleteRecord(userDetailsId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl2}/${userDetailsId}`)
  }

  addUserJobDetails(user: UserJobDetails, userId:number):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl3}/${userId}`, user)
  }
}
