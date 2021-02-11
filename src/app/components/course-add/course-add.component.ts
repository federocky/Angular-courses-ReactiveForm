import { CourseService } from './../../services/course.service';
import { Course } from './../../models/course';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

  //creamos el formulario
  myForm: FormGroup;

  //creamos los campos del formulario
  title: FormControl;
  img: FormControl;
  author: FormControl;
  duration: FormControl;
  type: FormControl;

  constructor( private courseService: CourseService,
              private router: Router
    ) {

    //construimos el formulario
    this.buildForm();

   }

  ngOnInit(): void {
  }

  //funcion para construir el domrulario y sus validaciones
  buildForm(){

    ////campos con validaciones
    this.myForm = new FormGroup({
      title:    new FormControl('', Validators.required),
      img:      new FormControl('', Validators.required),
      author:   new FormControl('', Validators.required),

      duration: new FormControl('', [
                                      Validators.required, 
                                      Validators.min(0), 
                                      Validators.pattern('[0-9]*')]),

      type:     new FormControl('', [Validators.required,
                                     Validators.pattern('web|videotutorial|course')])
    });

    //asignamos las variables
    this.setFormControlsVariables();
  }


  //funcion que asigna el valor a las variales
  setFormControlsVariables(): void {
    this.title    = this.myForm.controls.title    as FormControl;
    this.img      = this.myForm.controls.img      as FormControl;
    this.author   = this.myForm.controls.author   as FormControl;
    this.duration = this.myForm.controls.duration as FormControl;
    this.type     = this.myForm.controls.type     as FormControl;
  }


  //metodo que envia el formulario
  onSubmit(){
    
    
    if(this.myForm.valid) {
      //si el formulario es valido
      //creamos un producto auxiliar
      const courseAux: Course = this.myForm.value;

      //agregamos el producto
      this.courseService.addCourse(courseAux)
        .subscribe( () => {
          //volvemos a la lista
          this.router.navigateByUrl('list');
        });
      
    }
    
    //si no es valido lo marca como touched para mostrar los errores.
    this.myForm.markAllAsTouched();
  }

}
