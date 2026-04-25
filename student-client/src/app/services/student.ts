// src/app/services/student.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://localhost:44316/api/StudentMaster'; // Adjust to your API route

  constructor(private http: HttpClient) {}

  // CREATE
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}`, student)
      .pipe(catchError(this.handleError));
  }

  // READ
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}`)
      .pipe(catchError(this.handleError));
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // UPDATE
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student)
      .pipe(catchError(this.handleError));
  }

  // DELETE
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // 🔑 Centralized error handler
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client Error: ${error.error.message}`;
       console.error("Client Side"+ error);
    } else {
      // Server-side error
      errorMessage = `Server Error: ${error.status} - ${error.message}`;
    }
    console.error(errorMessage); // Log for debugging
    return throwError(() => new Error(errorMessage));
  }
}
