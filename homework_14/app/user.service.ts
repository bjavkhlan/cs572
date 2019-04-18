import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl:string = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) {}
  login(email:string, password:string) {
    this.http.post(apiUrl+'/login', {
      email: email,
      password: password
    }).subscribe(
      data => {
        localStorage.setItem("token", data.toString());
      })
  };
  verify() {
    this.http.get(apiUrl+'/protected').subscribe(
      err=> console.log(err),
      data => console.log(data));
  };  
}
