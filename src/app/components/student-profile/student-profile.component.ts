import { Component } from '@angular/core';
import { Student } from './student-profile.model';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
  // Sample student data
  student: Student = {
    name: 'Coniaro, Joanna Mae',
    major: 'Bachelor of Science in Information Technology',
    bio: 'A passionate learner and aspiring software developer.',
    photo: 'coniaro.jpg'
  };
}
