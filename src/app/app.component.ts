import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-todo-app';
  task: string = '';
  message: string = 'Tarea pendiente';

  updateTask(newTask: string) {
    this.task = newTask;
  }

  setTaskCompleted() {
    this.message = `Tarea completada: ${this.task}`;
  }
}