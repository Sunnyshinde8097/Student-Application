// components/student/student.component.ts
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student';
import { CommonModule } from '@angular/common';   // <-- Needed for *ngFor
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.html',
  imports: [ FormsModule,CommonModule],
  styleUrls: ['./student.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = { StudentID: 0, studentName: '', MobileNo: '', email: '' };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

loadStudents(): void {
  this.studentService.getStudents().subscribe({
    next: (data) => {
      this.students = data;
      console.log('Students loaded:', data);   // ✅ logs to console
      alert('Students loaded successfully!');  // ✅ shows browser alert
    },
    error: (err) => {
      console.error('Error loading students:', err);
      alert('Failed to load students: ' + err.message);
    }
  });
}


  addStudent(): void {
    this.studentService.addStudent(this.newStudent).subscribe(() => {
      this.loadStudents();
      this.newStudent = { StudentID: 0, studentName: '', MobileNo: '', email: '' };
    });
  }

  updateStudent(student: Student): void {
    this.studentService.updateStudent(student.StudentID, student).subscribe(() => {
      this.loadStudents();
    });
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });
  }
}
