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
	value: any;

	constructor(private studentService: StudentService, private toastr: ToastrService) {

	}
	ngOnInit() {
		var currentDate = date.format(new Date(), 'YYYY-MM-DD');
		this.getAppointmentList(currentDate);
	}

	getAppointmentList(currentDate) {
		this.studentService.getAppointmentsByDate(currentDate)
			.subscribe((resp) =>
				this.patientListData = resp.data
			);
	}

	getAppointmentByDate(dateVal) {
		this.patientListData = [];
		this.studentService.getAppointmentByDate(dateVal)
			.subscribe((resp) => {
				if (resp.data.length) {
					this.patientListData = resp.data
				}
			})
	};



}
