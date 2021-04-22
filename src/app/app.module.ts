import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropImagesComponent } from './components/drag-drop-images/drag-drop-images.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { ImagesPreviewComponent } from './layouts/images-preview/images-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropImagesComponent,
    ImageContainerComponent,
    ImagesPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
