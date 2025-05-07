import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {  Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FlightsService } from '../../services/flights.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  providers:[DatePipe],
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    searchForm:FormGroup;
    flights:any[]=[];

    constructor(private router:Router, private datePipe:DatePipe, private flightService:FlightsService ){
      this.searchForm = new FormGroup({
        departureAirport: new FormControl(''),
        arrivalAirport: new FormControl(''),
        departureDate: new FormControl('')
  
      })
    };

    onSubmit(){
      if (this.searchForm.invalid) {
        Swal.fire('Please fill in all required fields');
        return;
      }
  
      // Extract Form Values
      const formData = this.searchForm.value;
      formData.departureDate = this.datePipe.transform(formData.departureDate, 'yyyy-MM-dd');
  
      // Call Flight Search API
      this.flightService.searchFlight(formData.departureAirport, formData.arrivalAirport, formData.departureDate)
        .subscribe({
          next:(result:any)=>{
            console.log("API Response in HomeComponent:", result);
            this.flights = result.length ? result : [];
            Swal.fire('Flights fetched successfully!');
            this.router.navigate(['/search'],{ state: { flights: result } });
          },
          error:(err:any)=>{
            console.error('Error fetching flights:', err);
          Swal.fire('Failed to fetch flights. Try again later.');
          }
        });
    
  
    }
}
