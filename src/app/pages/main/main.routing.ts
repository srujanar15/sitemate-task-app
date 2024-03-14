import { Routes } from '@angular/router';
import { AuthGuard } from '../../services/auth-guard.service';

// pages
import { AppTaskOperationsComponent } from './upload-video/task-operations.component';

export const MainRoutes: Routes = [
  {
    path: 'main',
    children: [
      {
        path: 'upload-video',
        component: AppTaskOperationsComponent,
        canActivate: [AuthGuard]
      }
    ],
  },
];
