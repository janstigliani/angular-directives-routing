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

  randomize(event: Event) {
    this.groupDimension = this.getFormData(event)
    if (this.groupDimension !== -1) {
      this.service.getStudents().subscribe({
        next: (data) => this.students = data,
        error: (err) => console.log(err),
      })

      const studentsArray = this.students;
      const finalArray = [];

      for (let i = 0; i < Math.ceil(this.students.length / this.groupDimension); i++) {
        const array: Student[] = []
        finalArray.push(array);
        console.log("final Array",finalArray)
      }

      for (let i = 0; i < this.students.length; i++) {
        const studentIndex = Math.floor(Math.random() * studentsArray.length)
        console.log("student index",studentIndex)
        const student = studentsArray[studentIndex];
        console.log("student",student)
        while (true) {
          const arrayIndex = Math.ceil(Math.random() * (this.students.length / this.groupDimension))
          console.log("array index",arrayIndex)
          if (finalArray[arrayIndex].length < this.groupDimension) {
            finalArray[arrayIndex].push(student);
            break;

            //aggiungere uno splice per togliere gli studenti
            //problema con il math.floor
            
          }
        }
      }
      this.RandomizedArray = finalArray;
    }
  }

  getFormData(event: Event): number {
    event.preventDefault();
    const form = document.getElementById("form") as HTMLFormElement;
    const data = new FormData(form);
    const number = data.get("number") as unknown as number

    if (number) {
      return number;
    }
    return -1;
  }

}
