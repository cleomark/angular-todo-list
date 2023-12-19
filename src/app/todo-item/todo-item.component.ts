import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() task: string = '';
  @Output() removeTask = new EventEmitter<string>();

  taskComplete: boolean = false;

  remove() {
    this.removeTask.emit(this.task);
  }
}
