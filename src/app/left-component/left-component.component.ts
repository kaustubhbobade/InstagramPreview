import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Posts } from '../Model/posts';
import { InstaServiceService } from '../services/insta-service.service';

@Component({
  selector: 'app-left-component',
  templateUrl: './left-component.component.html',
  styleUrls: ['./left-component.component.css']
})
export class LeftComponentComponent implements OnInit {

  data:Posts[] = [];
  clickedPost: Posts = null;
  spinner:boolean = false;

  @Output() postClicked = new EventEmitter();

  constructor(private instaservice: InstaServiceService) { }

  ngOnInit(): void {
    this.spinner = true;
    this.instaservice.getData().subscribe( res =>{
      this.data = res;
      this.data.sort((val1,val2) => { return val2.likes-val1.likes} )
      this.spinner = false;
    })

    this.instaservice.likeCount.subscribe( res =>{
      let i = this.data.findIndex(val => (val.Image===this.clickedPost.Image) && (val.timestamp === this.clickedPost.timestamp));
      this.clickedPost = this.data[i];
      if(this.clickedPost)
      {
        if(res){
          this.data[i].isLiked = true;
          this.data[i].likes++;
        }
        else{
          this.data[i].isLiked = false;
          this.data[i].likes--;
        }
      }
      this.data.sort((val1,val2) => { return val2.likes-val1.likes} )
    })
  }

  isPostClicked(item){
    this.clickedPost = item;
    this.postClicked.emit(item);
  }

}
