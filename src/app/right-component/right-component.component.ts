import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { InstaServiceService } from '../services/insta-service.service';

@Component({
  selector: 'app-right-component',
  templateUrl: './right-component.component.html',
  styleUrls: ['./right-component.component.css']
})
export class RightComponentComponent implements OnInit, OnChanges {

  clicked:boolean = false;

  @Input() post;
  
  constructor(private instaservice: InstaServiceService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.clicked = this.post.isLiked? true: false; 
  }

  ngOnInit(): void {
  }

  buttonClicked(){
    this.clicked = !this.clicked;
    this.instaservice.likeCount.next(this.clicked);
  }

}
