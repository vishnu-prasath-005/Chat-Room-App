import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RoomService {
    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:8070';
    getLists() {
        const options = { withCredentials: true };
        return this.http.get(`${this.baseUrl}/room`,options);
    }
}