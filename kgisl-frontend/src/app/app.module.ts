import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';

// Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { IgxTimePickerModule } from "igniteui-angular";
// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { StudentService } from './services/student/student.service';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';

// Components
import { AppComponent } from './components/index/app.component';
import { StudentListComponent } from './components/student/list/student-list.component';
import { StudentDetailsComponent } from './components/student/details/student-details.component';
import { StudentAddComponent } from './components/student/add/student-add.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent, homeChildRoutes } from './components/home/home.component';
import { HighlightStudentDirective } from './directives/highlight-student.directive';
import { AppRoutingModule } from './app-routing.module';
import { DoctorSlotComponent } from './components/student/slot/doctor-slot/doctor-slot.component';


@NgModule({
	declarations: [
		AppComponent,
		StudentListComponent,
		StudentDetailsComponent,
		StudentAddComponent,
		LoginComponent,
		HomeComponent,
		FilterPipe,
		PhonePipe,
		HighlightStudentDirective,
		DoctorSlotComponent
	],
	imports: [
		BrowserModule,
		RouterModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot({
			timeOut: 3000,
			positionClass: 'toast-bottom-right',
			preventDuplicates: true,
		}),
		HttpClientModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatChipsModule,
		IgxTimePickerModule
	],
	providers: [AuthService, UserService, StudentService],
	bootstrap: [AppComponent]
})

export class AppModule { }
