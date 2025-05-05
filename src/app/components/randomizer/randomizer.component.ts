import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-randomizer',
  imports: [CommonModule],
  templateUrl: './randomizer.component.html',
  styleUrl: './randomizer.component.scss'
})
export class RandomizerComponent {

  service = inject(StudentService);
  students: Student[] = [];
  groupDimension = 0;
  RandomizedArray?: Student[][];

  constructor() {
    this.service.getStudents().subscribe({
      next: (data) => this.students = data,
      error: (err) => console.log(err),
    })
  }

  randomize(event: Event) {

    event.preventDefault();

    this.groupDimension = this.getFormData();

    if (this.students.length === 0) return;
    if (this.groupDimension === -1) return;

    const studentsArray = [...this.students];
    const finalArray = [];

    const groupNumber = Math.ceil(this.students.length / this.groupDimension);

    for (let i = 0; i < groupNumber; i++) {

      const array: Student[] = []
      finalArray.push(array);
      console.log("final Array", finalArray)

    }

    for (let i = 0; i < this.students.length; i++) {

      const studentIndex = Math.floor(Math.random() * studentsArray.length)
    
      const student = studentsArray[studentIndex];
  
      while (true) {

        const arrayIndex = Math.floor(Math.random() * groupNumber)

        if (finalArray[arrayIndex].length < this.groupDimension) {

          finalArray[arrayIndex].push(student);
          studentsArray.splice(studentIndex, 1);
          console.log(studentsArray);

          break;

        }
      }
    }
    this.RandomizedArray = finalArray;
  }

  getFormData(): number {
    const form = document.getElementById("form") as HTMLFormElement;
    const data = new FormData(form);
    const number = data.get("number") as unknown as number

    if (number) {
      return number;
    }
    return -1;
  }

}
