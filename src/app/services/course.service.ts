import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  //guardamos la ruta a la peticion
  url: string = 'http://localhost:3000/courses';


  constructor(private http: HttpClient) { }

  //devuelve todos los cursos
  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.url);
  }

  //devuelve un curso
  getCourse( id: number ): Observable<Course> {
    return this.http.get<Course>(`${this.url}/${id}`);
  }

  //agrega un curso
  addCourse( course: Course ): Observable<Course[]> {
    return this.http.post<Course[]>(this.url, course);
  } 

}
