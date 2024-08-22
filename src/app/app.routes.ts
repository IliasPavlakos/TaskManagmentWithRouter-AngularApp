import {CanMatchFn, RedirectCommand, Route, Router, Routes, UrlSegment} from "@angular/router";
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {resolveTitle, resolveUserName, UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {NotFoundComponent} from "./not-found/not-found.component";

import {routes as userRoutes} from "./users/users.routes";
import {inject} from "@angular/core";
import {canLeavePage, NewTaskComponent} from "./tasks/new-task/new-task.component";


const dummyCanMatch : CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if(shouldGetAccess < 0.5){
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};


export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent
    , title: 'No task selected'
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    data: {message: 'Hello!'},
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    resolve: {
      'userName': resolveUserName
    },
    title: resolveTitle,
    canMatch: [dummyCanMatch]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeavePage]
  }
];
