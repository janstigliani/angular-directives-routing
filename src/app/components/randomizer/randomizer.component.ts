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
  students: Student[] = []
  // students= signal<Student[]>([])
  groupDimension = 0;

  randomize(event:Event) {
    this.groupDimension = this.getFormData(event)
    if (this.groupDimension!==-1) {
      this.service.getStudents().subscribe({
        next: (data) => this.students = data,
        error: (err) => console.log(err),
      })
    }
  }

  getFormData(event:Event): number {
    event.preventDefault();
    const form = document.getElementById("form") as HTMLFormElement;
    const data = new FormData(form);
    // const number = data.get("number");
    // console.log(number);
    const number = data.get("number") as unknown as number
    
    if(number){
      return number;
    }
    return -1;
  }

}
