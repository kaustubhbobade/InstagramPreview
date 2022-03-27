import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  post = null;
  
  constructor() { }

  ngOnInit(): void {
  }

  postClicked(post){
    this.post = post;
  }

}
