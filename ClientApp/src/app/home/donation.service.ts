import { Injectable, Inject, Pipe } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Donation } from './donation'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  saveDonation(donation: Donation): Observable<Donation> {
    return this.http.post <Donation>(this.baseUrl + 'api/donation', donation, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError))
      
  }
}
