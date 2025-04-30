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
  }

  orderByName() {
    this.studentArray.sort((a: Student,b:Student) => this.comparisonBySurname(a.surname,b.surname));
  }

  comparisonBySurname(surname1: string, surname2: string){
    return surname1.localeCompare(surname2);
  } 

  orderByAge() {
    this.studentArray.sort((a, b) => {
      const date1 = new Date(a.dob).getTime()
      console.log(date1);

      const date2 = new Date(b.dob).getTime()

      return date1 - date2
    })
  }

  ngOnInit() {
    console.log("siamo dentro");
    
    this.service.getStudents().subscribe({
      next: (data) => {this.studentArray = data
        console.log(data);
      },
      error: (err) => console.log(err),
    })
  }
}
