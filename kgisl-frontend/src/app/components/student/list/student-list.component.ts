import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import date from 'date-and-time';

// Services
import { StudentService } from '../../../services/student/student.service';
import { routerTransition } from '../../../services/config/config.service';
import { IgxTimePickerModule } from "igniteui-angular";
@Component({
	selector: 'app-student-list',
	templateUrl: './student-list.component.html',
	styleUrls: ['./student-list.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class StudentListComponent implements OnInit {
	studentList: any;
	patientListData: any;

	constructor(private studentService: StudentService, private toastr: ToastrService) {

	}
	ngOnInit() {
		//var currentDate = date.format(new Date(), 'DD-MM-YYYY');
		var currentDate = '02-12-2020'
		this.getAppointmentList(currentDate);
	}

	getAppointmentList(currentDate) {
		this.studentService.getAppointmentsByDate(currentDate)
			.subscribe((resp) =>
				this.patientListData = resp.data
			);
	}



}
