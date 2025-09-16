import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  task: string = '';
  tasks: {name: string, completed: boolean}[] = [];
  message: string = 'Tarea pendiente: ';

  sendTask() {
    if (this.task.trim()) {
      this.tasks.push({name: this.task, completed: false});
      this.task = '';
    }
  }

  onTaskCompleted(taskName: string) {
    const task = this.tasks.find(t => t.name === taskName);
    if (task) {
      task.completed = true;
      this.message = `Tarea completada: ${taskName}`;
    }
  }

  updateMessage() {
    this.message = `Tarea pendiente: ${this.task}`;
  }
}
