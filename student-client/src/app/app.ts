// src/app/app.component.ts
import { Component } from '@angular/core';
import { StudentComponent } from './components/student/student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
