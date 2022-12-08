import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private baseUrl5 =  "http://localhost:8081/rahul/registration/all/user/getDeleted"
  private baseUrl6 = "http://localhost:8081/rahul/registration/user/activate"
  constructor(private httpClient: HttpClient) { }

  username="rahul@gmail.com"
  password= "rahul@123"
  headers=new HttpHeaders({Authorization:'Basic '+ btoa(this.username+":"+this.password)})

  registerUser(user: User):Observable<object>{
    console.log(user)
    const headers=this.headers
    return this.httpClient.post(`${this.baseUrl}`, user,{headers});
  }

  getAllUser():Observable<User[]>{
    const headers=this.headers
    return this.httpClient.get<User[]>(`${this.baseUrl1}`,{headers});
  }

  getUserById(userId : number):Observable<User>{
    const headers=this.headers
    return this.httpClient.get<User>(`${this.baseUrl2}/${userId}`,{headers})

  }

  updateUser(user: User):Observable<Object>{
    const headers=this.headers
    return this.httpClient.put(`${this.baseUrl3}/${user.userId}`, user,{headers})
  }

  deleteUser(userId:number):Observable<Object>{
    const headers=this.headers
    return this.httpClient.delete(`${this.baseUrl4}/${userId}`,{headers})
  }

  getDeletedUser():Observable<User[]> {
    const headers=this.headers
    return this.httpClient.get<User[]>(`${this.baseUrl5}`,{headers});
  }

  activateUser(userId:number){
    const headers=this.headers
    return this.httpClient.get(`${this.baseUrl6}/${userId}`,{headers})
  }
}
