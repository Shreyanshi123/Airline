import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../services/flights.service';
import { FormGroup ,FormControl, ReactiveFormsModule,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editairline',
  imports: [ReactiveFormsModule],
  templateUrl: './editairline.component.html',
  styleUrl: './editairline.component.css'
})
export class EditairlineComponent implements OnInit {
    flightNumber:any;
    editFlightForm:FormGroup;

    constructor(
      private flightService: FlightsService,
      private route: ActivatedRoute,
      private router: Router
    ) {
      this.editFlightForm = new FormGroup({
        airline: new FormControl('', Validators.required),
        flightNumber: new FormControl('', Validators.required),
        departureAirport: new FormControl('', Validators.required),
        arrivalAirport: new FormControl('', Validators.required),
        frequency: new FormControl('', Validators.required),
        departureTime: new FormControl('', Validators.required),
        arrivalTime: new FormControl('', Validators.required),
        aircraftRegistration: new FormControl('', Validators.required),
        seatCount: new FormControl('', Validators.required),
        ticketPrice: new FormControl('', Validators.required)
      });
    }

    ngOnInit(): void {
      this.route.params.subscribe(params=>{
        this.flightNumber=params['flightNumber'];

        this.flightService.getFlightByFlightNumber(this.flightNumber).subscribe({
            next:(data:any)=>{
              this.editFlightForm.patchValue(data);
            },
            error:(err)=>{
              console.log(err);
            }
        })
      })
    }

    onSubmit():void{
      if (this.editFlightForm.invalid) {
        Swal.fire('Please fill in all required fields correctly.');
        return;
      }
  
      const updatedFlightData = this.editFlightForm.value;
      this.flightService.updateFlight(this.flightNumber, updatedFlightData).subscribe({
        next: (data:any) => {
          Swal.fire('Flight updated successfully!');
          this.router.navigate(['/schedule']); // Redirect to flight list
        },
        error: (err:any) => {
          console.log(err);
          Swal.fire('Error updating flight. Please try again.');
        }
      });
  
    }

}
