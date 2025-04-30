import { Component, inject } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-form',
  imports: [CommonModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.scss'
})
export class AddFormComponent {
  service = inject(StudentService);
}
