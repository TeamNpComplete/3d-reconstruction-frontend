import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesPreviewComponent } from './layouts/images-preview/images-preview.component';
import { SavedModelsComponent } from './layouts/saved-models/saved-models.component';

const routes: Routes = [
  { path: 'reconstruct', component: ImagesPreviewComponent },
  { path: 'saved', component: SavedModelsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
