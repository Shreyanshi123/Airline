import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { EditairlineComponent } from './components/editairline/editairline.component';
import { BookingComponent } from './components/booking/booking.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
 {path:'search',component:SearchComponent},
 {path:'addFlight',component:AddFlightComponent},
 {path:'editFlight/:flightNumber',component:EditairlineComponent},
 { path: 'dashboard/schedule', component: ScheduleComponent },
{ path: 'home/booking', component: BookingComponent },
{path:'dashboard',component:DashboardComponent}
// { path: 'home/booking/manage', component: ManageComponent },
];
