import { Component } from '@angular/core';
import { RoomService } from './service/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  roomList : any;
  constructor(public roomService : RoomService,private router: Router) {}

  ngOnInit(){
    console.log("kjsjsjs")
    this.roomService.getLists().subscribe(data => {
      this.roomList = data;
    },
    error => {
     alert(error.error)
    })
  }

  navigateRoom(roomId : number){
     this.router.navigate([`room`],{
      queryParams : {
        room_id : roomId
      }
     })
  }
}
