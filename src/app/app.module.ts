import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';

@NgModule({
  declarations: [AppComponent, AdminPostsComponent],
  imports: [BrowserModule, RouterOutlet, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
