import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  route = inject(ActivatedRoute);
  service = inject(StudentService);
  student?:Student;
  
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
}
