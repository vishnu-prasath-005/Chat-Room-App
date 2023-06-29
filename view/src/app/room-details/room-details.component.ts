import { Component } from '@angular/core';
import { PostService } from '../service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent {
  postList :any = [];
  roomId : number;
  post : string = ''
  isLoading : boolean = false ;

  postForm : FormGroup= new FormGroup({
    postData: new FormControl()
});

  constructor(public postService : PostService,public userService : UserService, private router: Router,private route: ActivatedRoute){  
     this.roomId = this.route.snapshot.queryParams['room_id'];
    }
  ngOnInit(){
      this.route.queryParams.subscribe(data => {
      this.roomId = data['room_id'];
      this.setUser();
      this.getPost();
      this.postForm.reset()

    })
  }

  getPost() {
    this.isLoading = true;
    this.postService.getposts(this.roomId).subscribe(
      data =>{
        this.isLoading = false ;
        this.postList = data
    },
    error  => {
      this.isLoading = false ;
      alert(error);
    })
  }

  setUser() {
    this.userService.setUser(this.roomId).subscribe(data => {
      alert(`you can chat using name  ${data}`)
    })
  }

  addPost(){
    this.isLoading = true;
    this.postService.addpost(this.post, this.roomId).subscribe(
      data => {
        this.postForm.reset()
        this.isLoading = false ;
        this.getPost();
      },
      error => {
        this.postForm.reset()
        this.isLoading = false ;
        alert(error.error);
      })
  }

}

