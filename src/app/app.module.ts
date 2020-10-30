import { TitleCasePipe } from './titlecase.pipe';
import { SummaryPipe } from './summary.pipe';
import { CourseService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author/author.service';
import { FormsModule } from '@angular/forms';
import { TitleCaseComponent } from './title-case/title-case.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { BoostrapPanelComponent } from './boostrap-panel/boostrap-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    TitleCaseComponent,
    TitleCasePipe,
    ToggleButtonComponent,
    BoostrapPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CourseService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
