import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { from } from 'rxjs';
// import { Observable} from "rxjs";
import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DatasService {
    constructor(private http: HttpClient) { }

    public getUser(username) {
    	console.log('NOMAS', username);
        return this.http.get(`https://api.github.com/users/${username}`).toPromise();
    }

    getUsers() {
        return this.http.get(`https://api.github.com/users`).toPromise();
    }

    public getUsersSince(cont) {
        return this.http.get(`https://api.github.com/users?since=${cont}`).toPromise();
    }
}
