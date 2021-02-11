import { CourseService } from './../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import Swal from 'sweetalert2/dist/sweetalert2.js';  


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  //listaremos los cursos
  courses: Course[];

  //mostraremos un spinner mientras recibe los datos
  cargando: boolean = true;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    //cargamos los cursos
    this.loadCourses();
  }

  //funciona que carga los cursos desde el servicio
  loadCourses(){

    this.courseService.getCourses()
      .subscribe( (res: Course[]) => {

        ///guardo los cursos
        this.courses = res;
        //dejo de mostrar el spinner
        this.cargando = false;

      },
      //si hay algun error mostraremos un alert
      (err) => {
        this.errorSweet();
      }
      );

  }

  //funcion que muestra un mensaje de error.
  errorSweet(){
    Swal.fire({  
      icon: 'error',  
      title: 'Oops...',  
      text: 'Something went wrong! Check the server or try again later',  
    });  

    //dejamos de mostrar el spinner
    this.cargando = false;
  }

}
