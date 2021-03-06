import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormatDatePipe } from './format-date.pipe';
import { FormatMoneyPipe } from './format-money.pipe';
import { MyDirectiveDirective } from './my-directive.directive';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    FormatDatePipe,
    FormatMoneyPipe,
    MyDirectiveDirective,
    TaskNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
