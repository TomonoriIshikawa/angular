import { Component, OnInit } from '@angular/core';
import { TodoList } from '../todoList';
import { FormControl, FormArray, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // todoList: TodoList = {
  //   id: 1,
  //   name: 'TodoList'
  // }
  title = 'todoList';

  public todoList: FormGroup;

  constructor(
    private b: FormBuilder,
  ) {}

  ngOnInit() {
    this.todoList = this.b.group({
      todos: this.b.array([this.b.group({
        todo: '',
        date: '',
      })]),
    });
  }

  getTodos() {
    return this.todoList.get('todos') as FormArray;
  }

  addTodos() {
  this.getTodos().push(
    this.b.group({
      todo: '',
      date: '',
    }));
  }

  getForm() {
    return this.b.group({
      todo: '',
      date: '',
    });
  }

  removeTodo(index: number) {
    this.getTodos().removeAt(index);
  }

  update() {
    // TODO: Use EventEmitter with form value
    console.log(this.todoList.value);
  }

}
