import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() task!: {name: string, completed: boolean};
  @Output() taskCompleted = new EventEmitter<string>();

  markAsCompleted() {
    if (!this.task.completed) {
      this.taskCompleted.emit(this.task.name);
    }
  }
}
