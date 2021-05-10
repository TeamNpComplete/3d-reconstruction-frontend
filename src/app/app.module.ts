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
import { HomeComponent } from './layouts/home/home.component';
import { LoginSignupModalComponent } from './components/login-signup-modal/login-signup-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DragDropImagesComponent,
    ImageContainerComponent,
    ImagesPreviewComponent,
    TopBarComponent,
    SavedModelsComponent,
    ModelViewerComponent,
    HomeComponent,
    LoginSignupModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StlModelViewerModule,
    BrowserAnimationsModule,
    MatInputModule,
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
