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

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.BASE_URL + this.STUDENTS_ENDPOINT);
  }

  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(this.BASE_URL + this.STUDENTS_ENDPOINT + id);
  }

  deleteStudent(student: Student, router: any) {
    const url = this.BASE_URL + this.STUDENTS_ENDPOINT + student.id
    fetch(url, {
      method: 'DELETE',
    }).then(res => {
      return res.json();
    }).then(task => {
      console.log("utente eliminato", task)
      router.navigate(['/'])
    }).catch(error => {
      console.log(error);
    })
  }

  addMarks(marksArray: number[], student: Student) {
    const url = this.BASE_URL + this.STUDENTS_ENDPOINT + student.id;

    return fetch(url, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ marks: marksArray })
    }).then(res => {
      return res.json();
    }).catch(error => {
      console.log("error")
    })
  }

  // addMarks1(marksArray:number[], student:Student){
  //   const url = this.BASE_URL + this.STUDENTS_ENDPOINT + student.id;
  //   return this.http.put<Student>(url, {
  //     headers: {'content-type':'application/json'},
  //     body: JSON.stringify({marks: marksArray}),
  //   })
  // }

  addMarks1(marksArray: number[], student: Student): Observable<Student> {
    const url = this.BASE_URL + this.STUDENTS_ENDPOINT + student.id;
    const body = { marks: marksArray };

    return this.http.put<Student>(url, body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  addStudent(student:Student) {

    // console.log("succede qualcosa")
    // const fakeStudent = {
    //   country: "pippolinia",
    //   name: "pippo",
    //   surname: "pippopolis",
    //   dob: "1999",
    //   gender: "pipposessuale",
    //   marks: [],
    // }

    const url = this.BASE_URL + this.STUDENTS_ENDPOINT;

    fetch(url, {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(student)
    }).then(res => {
          return res.json();
    }).then(task => {
      console.log(task);
    }).catch(error => {
      console.log(error);
    })
  }

  
}
