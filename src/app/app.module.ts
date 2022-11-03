import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AdminPostsComponent, AdminViewPostComponent],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
