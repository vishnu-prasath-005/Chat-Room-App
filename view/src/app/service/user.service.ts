import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:8070';

    setUser(roomId:number) {
        const headers = { withCredentials: true };
        return this.http.get(`${this.baseUrl}/user/:roomId`,headers);
    }
}