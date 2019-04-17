import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getOnlineData() {
    this.http.get('https://randomuser.me/api/?results=10')
    .subscribe(data => localStorage.setItem('data', JSON.stringify(data)));
  }
  getCachedData() {
    const data =  JSON.parse(localStorage.getItem('data'));
    if (data.hasOwnProperty('results')) return data.results;
    else return {};
  }
}
