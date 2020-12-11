import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

// Services
import { ValidationService } from '../../../services/config/config.service';
import { StudentService } from '../../../services/student/student.service';
import { routerTransition } from '../../../services/config/config.service';
import { MatDialog } from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-student-add',
	templateUrl: './student-add.component.html',
	styleUrls: ['./student-add.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class StudentAddComponent implements OnInit {
	studentAddForm: FormGroup;
	index: any;
	appointmentListData: any;
	value: any;

	constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private studentService: StudentService, private toastr: ToastrService, public dialog: MatDialog) {	}

	ngOnInit() {
		this.getAvailableSlots();
	}

	getAvailableSlots() {
		this.studentService.getAvailableSlots()
			.subscribe((resp) =>
				this.appointmentListData = resp.data[0].available_slots
			);
	}

	getAvailableSlotsByDate(dateVal) {
		this.appointmentListData = [];
		this.studentService.getAvailableSlotsByDate(dateVal)
			.subscribe((resp) => {
				if (resp.data.length) {
					this.appointmentListData = resp.data[0].available_slots
				}
			})
	};



}



