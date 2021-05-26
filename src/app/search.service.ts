import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  

private username: string;
private clientId = '704ed206494f73e86a24';
private clientSecret = 'de5d467feab8753d7140225065de64822c8754d6';
  constructor(private http: HttpClient) {
    this.username = '';
  }
  
  getSearchData(userName: string){
    return this.http.get('https://api.github.com/users/' + userName);
  }
}
