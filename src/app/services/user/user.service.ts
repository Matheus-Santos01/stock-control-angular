import { enviroments } from './../../../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { SignupUserResponse } from 'src/app/models/interfaces/user/SignupUserResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = enviroments.API_URL

  constructor(private http: HttpClient) { }

  signupUser(requestDatas: SignupUserRequest): Observable<SignupUserResponse>{
    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`,
      requestDatas
    )
  }

}
