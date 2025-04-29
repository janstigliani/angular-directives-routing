import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly BASE_URL = "https://68109d7827f2fdac2412128f.mockapi.io/";
  readonly STUDENTS_ENDPOINT = "students/"

  constructor(private http:HttpClient) {
   }

  getStudents():Observable<Student[]> {
    return this.http.get<Student[]>(this.BASE_URL + this.STUDENTS_ENDPOINT);
  }

  getStudent(id: string):Observable<Student> {
    return this.http.get<Student>(this.BASE_URL + this.STUDENTS_ENDPOINT + id);
  }
}
