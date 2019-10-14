import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProjectListComponent },
      { path: 'projects/:projectId', component: ProjectDetailsComponent },
      { path: 'contact', component: ContactComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    ContactComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
