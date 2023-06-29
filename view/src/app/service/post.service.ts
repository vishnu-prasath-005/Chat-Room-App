import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:8070';

    getposts(roomId:number) {
        const headers = { withCredentials: true };
        return this.http.get(`${this.baseUrl}/getpost/${roomId}`,headers);
    }

    addpost(postData:string, roomId : number){
        const headers = { withCredentials: true };
        const body = {posts: postData};
        return this.http.post(`${this.baseUrl}/post/${roomId}`,body, headers);
    }
}