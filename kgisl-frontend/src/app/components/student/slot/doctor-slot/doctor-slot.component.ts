import { Component, OnInit } from '@angular/core';
import { IgxTimePickerModule } from "igniteui-angular";
var moment = require('moment'); 
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { StudentService } from '../../../../services/student/student.service';

@Component({
  selector: 'app-doctor-slot',
  templateUrl: './doctor-slot.component.html',
  styleUrls: ['./doctor-slot.component.scss']
})
export class DoctorSlotComponent implements OnInit {
data: any;
date: any;
  userForm: FormGroup;
  startTime: string;
  endTime: string;
  constructor(private fb: FormBuilder,private studentService: StudentService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      addUserGroup: this.fb.group({
        date: new FormControl('', [Validators.required]),
        startTime: new FormControl('', [Validators.required]),
        endTime: new FormControl('', [Validators.required])
      })
    })
   
  }

  get fug() { return (<FormGroup>this.userForm.get('addUserGroup')).controls; }

get addUserGroup() {
  return this.userForm.get('addUserGroup');
}

async onSubmit() {
  var data = this.userForm.getRawValue();
  data.addUserGroup.startTime = data.addUserGroup.startTime.concat(":00");
  data.addUserGroup.endTime = data.addUserGroup.endTime.concat(":00");
  data.addUserGroup.available_date = data.addUserGroup.date;
  console.log(data.addUserGroup);
  Object.assign(data.addUserGroup); 
  this.addAvailableSlots(data.addUserGroup) 
}

addAvailableSlots(slotDetails) {
  this.studentService.addAvailableSlots(slotDetails)
    .subscribe((resp) =>
      console.log(resp)
    );
}

}
