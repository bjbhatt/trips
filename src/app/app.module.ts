import { NgModule, ErrorHandler } from '@angular/core'; // for @NgModule decoration, for overriding Error Handler
import { BrowserModule } from '@angular/platform-browser'; // for dealing with Browser Events
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // for dealing with Form submission and form data model
import { HttpModule } from '@angular/http'; // for Http Service (AJAX) Calls
import { RouterModule } from '@angular/router'; // for adding routing paths

import { AppComponent } from './app.component'; 
import { AppErrorHandler } from './common/app-error-handler';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { MatComponentsModule } from './mat-components/mat-components.module';

import { InstituteService } from './services/institute.service';

import { DivisionService } from './services/division.service';
import { DivisionsComponent } from './admin/divisions/divisions.component';
import { DivisionFormComponent } from './admin/divisions/division-form.component';

import { BranchService } from './services/branch.service';
import { BranchesComponent } from './admin/branches/branches.component';
import { BranchFormComponent } from './admin/branches/branch-form.component';

import { CanService } from './services/can.service';
import { CansComponent } from './admin/cans/cans.component';
import { CanFormComponent } from './admin/cans/can-form.component';

import { CanAllocationService } from './services/can-allocation.service';
import { CanAllocationsComponent } from './admin/can-allocations/can-allocations.component';

import { InvitationalTravlerService } from './services/invitational-traveler.service';
import { InvitationalTravelersComponent } from './admin/invitational-travelers/invitational-travelers.component';

import { UserRoleService } from './services/user-role.service';
import { UserRolesComponent } from './admin/user-roles/user-roles.component';

import { PlannedTripsComponent } from './planned-trips/planned-trips.component';

@NgModule({
  declarations: [
    AppComponent,
    DivisionFormComponent,
    DivisionsComponent,
    BranchFormComponent,
    BranchesComponent,
    CanFormComponent,
    CansComponent,
    CanAllocationsComponent,
    UserRolesComponent,
    NavBarComponent,
    InvitationalTravelersComponent,
    PlannedTripsComponent
  ],
  entryComponents: [
    DivisionFormComponent,
    BranchFormComponent,
    CanFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'admin/divisions', component: DivisionsComponent },
      { path: 'admin/branches', component: BranchesComponent },
      { path: 'admin/cans', component: CansComponent },
      { path: 'admin/can-allocations', component: CanAllocationsComponent },
      { path: 'admin/invitational-travelers', component: InvitationalTravelersComponent },
      { path: 'admin/user-roles', component: UserRolesComponent  },
      { path: 'planned-trips', component: PlannedTripsComponent }
    ])
  ],
  providers: [
    InstituteService,
    DivisionService,
    BranchService,
    CanService,
    CanAllocationService,
    InvitationalTravlerService,
    UserRoleService,
    { provide: ErrorHandler, useClass: AppErrorHandler}  //replace standard ErrorHandler with custom AppErrorHandler for the entire Application 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
