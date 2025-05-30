import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  flights:any[]=[];
  
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.flights = navigation?.extras.state?.['flights'] || [];
    console.log('Flight Data:', this.flights);
  }

}
