import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { from } from 'rxjs';
import { Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';


@Injectable()
export class DatasComponent {
    private userName: string;
    private clientId: string = 'xxxxxx';
    private clientSecret: string = 'xxxxxx';
    private url: string = 'https://api.github.com';

    constructor(private _http: HttpClient) {
        this.userName = '';
    }

    getUser() {
        if (this.userName) {
            return this._http.get(this.url + this.userName
                + '?client_id=' + this.clientId
                + '&client_secret=' + this.clientSecret).pipe(map(res => res));
        }
    }

    getUsers() {
        if (this.userName) {
            return this._http.get(this.url).pipe(map(res => res));
        }
    }
}
