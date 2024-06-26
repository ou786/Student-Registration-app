import { Component } from '@angular/core';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {
  student = {
    name: '',
    dob: '',
    gender: '',
    email: '',
    address: '',
    ph: '',
    grade: '',
    parentsName: ''
  };

  students: any[] = [];

  onSubmit() {
    this.students.push({ ...this.student });
    this.clearForm();
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

  clearForm() {
    this.student = {
      name: '',
      dob: '',
      gender: '',
      email: '',
      address: '',
      ph: '',
      grade: '',
      parentsName: ''
    };
  }
}
