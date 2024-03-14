import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTaskOperationsComponent } from './pages/main/upload-video/task-operations.component';
const routes: Routes = [
  {
    path: '',
    component: AppTaskOperationsComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('./pages/main/main.module').then((m) => m.MainModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
