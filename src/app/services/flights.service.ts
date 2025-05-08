import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { tap,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private baseUrl = 'https://localhost:7261/api/Flights';
  constructor(private http:HttpClient) { }

  searchFlight(from: string, to: string, departureDate: string): Observable<any> {
    // Ensure the date format matches backend expectations
    const formattedDate = departureDate.split("T")[0];

    const params = new HttpParams()
      .set('from', from)
      .set('to', to)
      .set('date', formattedDate);

    console.log("Requesting flights from:", `${this.baseUrl}/search`);
    console.log("Params:", params.toString());

    return this.http.get(`${this.baseUrl}/Search/search`, { params }).pipe(
      tap(response => {
        console.log("API Response in FlightService:", response);
      }),
      catchError(error => {
        console.error("API Call Failed:", error);
        return throwError(error);
      })
    );
  }

  getFlights(){
    return this.http.get(`${this.baseUrl}/GetAll`);
  }

  deleteFlights(flightNumber:any){
    console.log(flightNumber);
    return this.http.delete(`${this.baseUrl}/Delete/${flightNumber}`)
  }
  
  getFlightByFlightNumber(flightNumber:any){
    console.log(flightNumber);
    return this.http.get(`${this.baseUrl}/getFlightByFlightNumber/${flightNumber}`);
  }

  updateFlight(FlightNumber:string,FlightData:any){
    return this.http.put(`${this.baseUrl}/Update/${FlightNumber}`,FlightData,{responseType:'text'});
  }

  addFlights(FlightData:any){
    console.log(FlightData);
    return this.http.post(`${this.baseUrl}/Create/`,FlightData);
  }

}
