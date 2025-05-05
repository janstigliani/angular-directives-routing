import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/authentication/auth.service';

@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  route = inject(ActivatedRoute);
  service = inject(StudentService);
  student?: Student;
  dob?: string | undefined;
  router = inject(Router);
  authServ = inject(AuthService)

  constructor() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id)
    if (id) {
      this.service.getStudent(id).subscribe({
        next: data => this.student = data,
        error: err => console.log(err),
      });
    }
  }

  formatDateToReadableString(isoString: string | undefined): string {
    if (isoString) {
      const date = new Date(isoString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
    return "error";
  }

  modifyDate() {
    this.dob = this.formatDateToReadableString(this.student?.dob);
    return this.dob;
  }

  showDialogue() {
    const dialog = document.getElementById("dialog") as HTMLDialogElement;
    dialog.showModal();
  }

  closeDialog() {
    const dialog = document.getElementById("dialog") as HTMLDialogElement;
    dialog.close();
  }

  getMarks(event:Event) {
    event.preventDefault()
    const form = document.getElementById("form") as HTMLFormElement;
    const data = new FormData(form);
    const mark = data.get("mark") as unknown as number;
    this.student?.marks.push(mark);
    this.addMarksToStudent(this.student!.marks);
  }

  addMarksToStudent(newMarks: number[]) {
   
    
    if (this.student) {
      // this.service.addMarks(newMarks, this.student)
        // .then(modifiedStudent => this.student = modifiedStudent)
        this.service.addMarks1(newMarks,this.student).subscribe({
          next: data => this.student = data,
          error: err => console.log(err),
        })
    }
  }
}
