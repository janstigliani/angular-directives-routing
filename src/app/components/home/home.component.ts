import { Component, inject } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  service = inject(StudentService);
  studentArray: Student[] = [];

  constructor() {
    this.service.getStudents().subscribe({
      next: (data) => this.studentArray = data,
      error: (err) => console.log(err),
    })
  }
}
