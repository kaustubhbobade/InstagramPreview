import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Posts } from '../Model/posts';

@Injectable({
  providedIn: 'root'
})
export class InstaServiceService {

  public likeCount: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<Posts[]>("https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json")
  }
}
