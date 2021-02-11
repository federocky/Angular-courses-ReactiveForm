import { CourseAddComponent } from './components/course-add/course-add.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: CoursesListComponent },
    { path: "courseList", component: CoursesListComponent },
    { path: "courseAdd", component: CourseAddComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
