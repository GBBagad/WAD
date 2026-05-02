export class AppComponent {

  newTask: string = "";
  tasks: string[] = [];

  // ADD
  addTask() {
    if(this.newTask == "") {
      alert("Enter task");
      return;
    }

    this.tasks.push(this.newTask);
    this.newTask = ""; // auto clear (two-way binding mule)
  }

  // DELETE
  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }

  // EDIT
  editTask(i: number) {
    let updated = prompt("Edit task:", this.tasks[i]);

    if(updated != null && updated != "") {
      this.tasks[i] = updated;
    }
  }
}