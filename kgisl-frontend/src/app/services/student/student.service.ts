import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class StudentService {
  searchDate:any;
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
				'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
				'Content-Type': 'application/json',
				'Accept': 'application/json'
    })
  }
  

  addAvailableSlots(slotDetails): Observable<any> {
    return this.http.post('http://localhost:9000/hospital/addAvailableSlots',slotDetails);    
  }

  getAvailableSlots(): Observable<any> {
    return this.http.get('http://localhost:9000/hospital/getAvailableSlots');    
  }

  getAvailableSlotsByDate(dateVal): Observable<any> {
    return this.http.get(`http://localhost:9000/hospital/getAvailableSlotsByDate/${dateVal}`);    
  }

  addPatientDetails(patientDetails): Observable<any> {
    return this.http.post('http://localhost:9000/hospital/addPatientDetails',patientDetails);    
  }

  getAppointmentByDate(dateVal): Observable<any> {
    return this.http.get(`http://localhost:9000/hospital/getAppointmentByDate/${dateVal}`);    
  }
  
  getAppointmentsByDate(searchDate): Observable<any> {
    return this.http.get(`http://localhost:9000/hospital/getAppointmentByDate/${searchDate}`);    
  }

}
