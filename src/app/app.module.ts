import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropImagesComponent } from './components/drag-drop-images/drag-drop-images.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { ImagesPreviewComponent } from './layouts/images-preview/images-preview.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { StlModelViewerModule } from 'angular-stl-model-viewer';
import { SavedModelsComponent } from './layouts/saved-models/saved-models.component';
import { ModelViewerComponent } from './components/model-viewer/model-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { LoginSignupModalComponent } from './components/login-signup-modal/login-signup-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table'; 
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropImagesComponent,
    ImageContainerComponent,
    ImagesPreviewComponent,
    TopBarComponent,
    SavedModelsComponent,
    ModelViewerComponent,
    LoginSignupModalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StlModelViewerModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  entryComponents: [
    ImagesPreviewComponent,
    SavedModelsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
