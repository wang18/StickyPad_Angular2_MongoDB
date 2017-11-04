import { Component, OnInit } from '@angular/core';
import { ApiserviceService} from '../services/apiservice.service';
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  providers: [ApiserviceService]
})
export class NoteListComponent implements OnInit {

  noteList: any[];
  searchStr: string = '';
  constructor(private apiSer: ApiserviceService) { }

  ngOnInit() {
    this.apiSer.getNotes().subscribe( res => {
      this.noteList = res;
    });
  }
  removeNote(id) {
    let tmpList = this.noteList;
    this.apiSer.deleteNote(id.$oid).subscribe( res => {
      console.log(res);
      const index = tmpList.findIndex(x => x._id.$oid == res._id.$oid );
      console.log(index);
      tmpList.splice(index,1);
      this.noteList=tmpList;
    });
  }
  addNotes(formData) {
    this.searchStr = formData.value.seatchStr.trim();
    let newNote = this.apiSer.addNote(this.searchStr);
    this.apiSer.getNotes().subscribe( res => {
      this.noteList = res;
    });
  }


}
