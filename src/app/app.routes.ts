import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { EditairlineComponent } from './components/editairline/editairline.component';

export const routes: Routes = [
{path:'',component:HomeComponent},
 {path:'search',component:SearchComponent},
 {path:'addFlight',component:AddFlightComponent},
 {path:'editFlight/:flightNumber',component:EditairlineComponent},
 { path: 'dashboard/schedule', component: ScheduleComponent }
// { path: 'home/booking', component: BookingComponent },
// { path: 'home/booking/history', component: HistoryComponent},
// { path: 'home/booking/manage', component: ManageComponent },
// { path: 'dashboard', component: DashboardComponent },
];
