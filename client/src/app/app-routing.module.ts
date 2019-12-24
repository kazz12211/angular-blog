import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth-guard';
import { ArticlesComponent } from './components/articles/articles.component';
import { EditorComponent } from './components/editor/editor.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UsersComponent } from './components/users/users.component';
import { PostComponent } from './components/post/post.component';
import { UsereditorComponent } from './components/usereditor/usereditor.component';
import { CommentsComponent } from './components/comments/comments.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FilesComponent } from './components/files/files.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard]
  },
  {
    path: 'articles', component: ArticlesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'comments', component: CommentsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'editor', component: EditorComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'users', component: UsersComponent, canActivate: [AuthGuard]
  },
  {
    path: 'post', component: PostComponent
  },
  {
    path: 'usereditor', component: UsereditorComponent, canActivate: [AuthGuard]
  },
  {
    path: 'gallery', component: GalleryComponent
  },
  {
    path: 'files', component: FilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
