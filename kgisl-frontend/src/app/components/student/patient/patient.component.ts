import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { StudentService } from '../../../services/student/student.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})

export class PatientComponent implements OnInit {
  data: any;
  value: any;
  userForm: FormGroup;
  submitted: Boolean;
  availableSlots: [];
  constructor(private fb: FormBuilder, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      addUserGroup: this.fb.group({
        fullName: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        mobileNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
        gender: ['', Validators.required],
        appointment_date: new FormControl('', Validators.required),
        appointment_time: new FormControl('', Validators.required),
        appointment_status: ['', Validators.required]
      })
    })
  }
  get fug() { return (<FormGroup>this.userForm.get('addUserGroup')).controls; }

  get addUserGroup() {
    return this.userForm.get('addUserGroup');
  }

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }
  async onSubmit() {
    var data = this.userForm.getRawValue();
    Object.assign(data.addUserGroup);
    this.addPatientDetails(data.addUserGroup)
  }
  
  addPatientDetails(patientDetails) {
    this.studentService.addPatientDetails(patientDetails)
      .subscribe((resp) => {
        if (resp) {
          this.router.navigate(['']);
        }
      }
      );
  }

  getAvailableSlotsByDate(dateVal) {
    console.log(dateVal);
    this.availableSlots = [];
    this.studentService.getAvailableSlotsByDate(dateVal)
      .subscribe((resp) => {
        if (resp.data.length) {
          this.availableSlots = resp.data[0].available_slots;
        }
      })
  };

}



