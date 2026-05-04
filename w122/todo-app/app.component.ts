import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  task: string = '';
  tasks: any[] = [];

  // Add Task
  addTask() {
    if (this.task.trim() !== '') {
      this.tasks.push({ name: this.task, editing: false });
      this.task = '';
    }
  }

  // Delete Task
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  // Edit Task
  editTask(index: number) {
    if (this.tasks[index].editing) {
      this.tasks[index].editing = false; // Save
    } else {
      this.tasks[index].editing = true;  // Edit mode
    }
  }
}