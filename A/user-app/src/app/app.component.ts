import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taskInput: string = '';
  tasks: any[] = [];
  editIndex: number = -1;

  addTask() {
    if (this.taskInput.trim() === '') return;

    if (this.editIndex === -1) {
      this.tasks.push({ name: this.taskInput });
    } else {
      this.tasks[this.editIndex].name = this.taskInput;
      this.editIndex = -1;
    }

    this.taskInput = '';
  }

  editTask(index: number) {
    this.taskInput = this.tasks[index].name;
    this.editIndex = index;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}