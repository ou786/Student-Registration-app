import { Component } from '@angular/core';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
})
export class StudentRegistrationComponent {
  student = {
    name: '',
    dob: '',
    gender: '',
    address: '',
    ph: '',
    grade: '',
    parentsName: '', // Add more properties for other student information
  };

  students: any[] = [];

  onSubmit() {
    this.students.push({ ...this.student });
    this.student = {
      name: '',
      dob: '',
      gender: '',
      address: '',
      ph: '',
      grade: '',
      parentsName: '',
      // Reset other student properties
    };
  }
}
