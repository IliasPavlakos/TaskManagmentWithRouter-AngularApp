import {Component, inject, input, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot} from "@angular/router";

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [
    RouterOutlet,
    RouterLink
  ]
})
export class UserTasksComponent  {

  message = input.required<string>();

  userName = input.required<string>();

  // userId = input.required<string>();
  //
  // userName = '';
  // private usersService = inject(UsersService);
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);

  // userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);
//
//   ngOnInit(): void {
//     console.log('Input data: ' + this.message());
//
//     console.log(this.activatedRoute);
//     const subscription = this.activatedRoute.paramMap.subscribe({
//       next: (params) => {
//         this.userName = this.usersService.users.find(u => u.id === params.get('userId'))?.name ?? '';
//       }
//     });
//     this.destroyRef.onDestroy(() => subscription.unsubscribe());
//   }
}

export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const usersService = inject(UsersService);
  return usersService.users.find(u => u.id === activatedRoute.paramMap.get('userId'))?.name ?? '';
};
