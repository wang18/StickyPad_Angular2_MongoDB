import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NoteListComponent} from './note-list/note-list.component';

export const AppRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'notelist', component: NoteListComponent }
]
