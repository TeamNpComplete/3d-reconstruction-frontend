import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesPreviewComponent } from './layouts/images-preview/images-preview.component';
import { SavedModelsComponent } from './layouts/saved-models/saved-models.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', component: ImagesPreviewComponent },
  { path: 'saved', component: SavedModelsComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
