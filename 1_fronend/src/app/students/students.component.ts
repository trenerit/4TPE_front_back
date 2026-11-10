import { Component } from '@angular/core';
import { Student } from '../models/studentInterface';
import { tabStudents } from '../data/students';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  imports: [RouterLink],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  dataStudents: Student[] = tabStudents;

}
