/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

// Services
import { ValidationService } from '../../../services/config/config.service';
import { StudentService } from '../../../services/student/student.service';
import { routerTransition } from '../../../services/config/config.service';
import {MatDialog} from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-student-add',
	templateUrl: './student-add.component.html',
	styleUrls: ['./student-add.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class StudentAddComponent implements OnInit {
	// create studentAddForm of type FormGroup
	studentAddForm: FormGroup;
	index: any;
	appointmentListData : any;

	constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private studentService: StudentService, private toastr: ToastrService,public dialog: MatDialog) {

		// Check for route params
		this.route.params.subscribe(params => {
			this.index = params['id'];
			// check if ID exists in route & call update or add methods accordingly
			if (this.index && this.index !== null && this.index !== undefined) {
				
			} else {

			}
		});
	}

	ngOnInit() {
		//var currentDate = date.format(new Date(), 'DD-MM-YYYY');
		var currentDate = '02-12-2020'
		this.getAvailableSlots();
	}

	getAvailableSlots() {
		this.studentService.getAvailableSlots()
			.subscribe((resp) =>
				this.appointmentListData = resp.data[0].available_slots
			);			
	}

	openDialog() {
		const dialogRef = this.dialog.open(DialogContentExampleDialog);	
		dialogRef.afterClosed().subscribe(result => {
		  console.log(`Dialog result: ${result}`);
		});
	  }
	 
}
export class DialogContentExampleDialog {}

	

	