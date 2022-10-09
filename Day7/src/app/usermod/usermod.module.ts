import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "profile", pathMatch: "full" },
  { path: "profile", component: UserProfileComponent }

]
@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsermodModule { }
