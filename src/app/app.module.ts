import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { SortPipePipe } from './shared/pipes/sort-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { UserSearchPipePipe } from './shared/pipes/user-search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    SortPipePipe,
    UserSearchPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
