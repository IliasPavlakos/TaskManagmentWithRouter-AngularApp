import {TasksComponent} from "../tasks/tasks.component";
import {NewTaskComponent} from "../tasks/new-task/new-task.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'prefix'},
  {path: 'tasks', component: TasksComponent},
  {path: 'tasks/new', component: NewTaskComponent},
]
