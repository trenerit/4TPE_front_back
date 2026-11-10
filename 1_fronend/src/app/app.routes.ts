import { Routes } from '@angular/router';
import { FormularzComponent } from './formularz/formularz.component';
import { StartComponent } from './start/start.component';
import { PetlaForComponent } from './petla-for/petla-for.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';
import { SerwisComponent } from './serwis/serwis.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'start'},
    {path: 'start',  component: StartComponent},
    {path: 'formularz', component: FormularzComponent},
    {path: 'petla-for', component: PetlaForComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'student/:id', component: StudentComponent},
    {path: 'serwis', component: SerwisComponent},
    {path: 'users', component: UsersComponent},

];
