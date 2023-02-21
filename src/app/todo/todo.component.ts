import { Component, OnDestroy, OnInit } from '@angular/core'
import { Task } from './task'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit, OnDestroy {
  
  tasks: Task[] = [
    { id: 1, title: 'Setup', completed: true },
    { id: 2, title: 'Entities', completed: false },
    { id: 3, title: 'Paging, Sorting and Filtering', completed: false },
    { id: 4, title: 'CRUD Operations', completed: false },
    { id: 5, title: 'Live Query', completed: false },
    { id: 6, title: 'Validation', completed: false },
    { id: 7, title: 'Backend methods', completed: false },
    { id: 8, title: 'Database', completed: false },
    { id: 9, title: 'Authentication and Authorization', completed: false },
    { id: 10, title: 'Deployment', completed: false }
  ]
  ngOnInit() {}
  ngOnDestroy() {}
  
  newTaskTitle = ''
  async addTask() {
    try {
      this.tasks.push({
        id: this.tasks.length,
        title: this.newTaskTitle,
        completed: false
      })
      this.newTaskTitle = ''
    } catch (error: any) {
      alert(error.message)
    }
  }

  async deleteTask(task: Task) {
    try {
      this.tasks = this.tasks.filter((t) => t != task)
    } catch (error: any) {
      alert(error.message)
    }
  }

  async setAllCompleted(completed: boolean) {
    for (const task of this.tasks) {
      task.completed = completed
    }
  }
}
