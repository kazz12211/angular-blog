import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth-guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { setAppInjector } from './AppInjector';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { EditorComponent } from './components/editor/editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UsersComponent } from './components/users/users.component';
import { PostComponent } from './components/post/post.component';
import { AsideComponent } from './components/aside/aside.component';
import { UsereditorComponent } from './components/usereditor/usereditor.component';
import { CommentsComponent } from './components/comments/comments.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FilesComponent } from './components/files/files.component';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalNotifyComponent } from './components/modal-notify/modal-notify.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    ArticlesComponent,
    EditorComponent,
    AboutComponent,
    ContactComponent,
    UsersComponent,
    PostComponent,
    AsideComponent,
    UsereditorComponent,
    CommentsComponent,
    GalleryComponent,
    FilesComponent,
    ModalConfirmComponent,
    ModalNotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule,
    NgbModalModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  entryComponents: [
    ModalConfirmComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    setAppInjector(injector);
  }
}
