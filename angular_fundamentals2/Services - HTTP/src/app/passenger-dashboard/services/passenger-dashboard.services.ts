import {Passenger} from '../models/passenger.interfaces';
import { HttpClient,HttpHeaders} from '@angular/common/http';
//import { RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
const PASSENGER_API:string='http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService{
  constructor(private http: HttpClient){

  }

  getPassengers():Observable<Passenger[]>{
    //console.log("Get " + PASSENGER_API);
   return this.http.get<Passenger[]>(PASSENGER_API).pipe(
    catchError((err:any) => {
      console.log('error caught in service')
      console.error(err);
      //Handle the error here
      return throwError(err);    //Rethrow it back to component
    }));

  }

  getPassengersPromise():Observable<Passenger[]>{
    //console.log("Get " + PASSENGER_API);
   return this.http.get<Passenger[]>(PASSENGER_API);

  }

  updatePassenger(passenger:Passenger):Observable<Passenger>{
    console.log("PUT " + PASSENGER_API);
    let headers = new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    )
    return this.http.put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger,{
      headers: headers
     });
  }

  removePassenger(passenger:Passenger):Observable<Passenger>{
    console.log("PUT " + PASSENGER_API);
    return this.http.delete<Passenger>(`${PASSENGER_API}/${passenger.id}`);
  }
}
