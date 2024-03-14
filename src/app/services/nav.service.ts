import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, share } from 'rxjs';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavService {
    private baseUrl = 'http://localhost:8080';
    public plyVd: any;
    public currentUrl = new BehaviorSubject<any>(undefined);
    loginDtls: Observable<any>;
    videoDtls: Observable<any>;
    vdDtls: Observable<any>;

    constructor(private router: Router, private http: HttpClient) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.currentUrl.next(event.urlAfterRedirects);
            }
        });
    }


    postJsonData(data: any): Observable<any> {
        this.videoDtls = this.http.post<any>(`${this.baseUrl}/insertJsonData`, data).pipe(share());
        return this.videoDtls;
    }

    getJsonData(): Observable<any> {
        this.vdDtls = this.http.get<any>(`${this.baseUrl}/getJsonData`).pipe(share());
        return this.vdDtls;
    }

    postUpdateJsonData(data: any): Observable<any> {
        this.videoDtls = this.http.post<any>(`${this.baseUrl}/updateJsonData`, data).pipe(share());
        return this.videoDtls;
    }

    postDeleteJsonData(data: any): Observable<any> {
        this.videoDtls = this.http.post<any>(`${this.baseUrl}/deleteJsonData`, data).pipe(share());
        return this.videoDtls;
    }
}
