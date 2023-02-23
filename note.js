var Note = /** @class */ (function () {
    function Note(title, content) {
        this.title = title;
        this.content = content;
    }
    Note.prototype.addNote = function () {
        var newNote = { title: this.title, content: this.content };
        noteList.addNoteToList(newNote);
    };
    return Note;
}());
var NoteList = /** @class */ (function () {
    function NoteList() {
        this.notes = [];
    }
    NoteList.prototype.addNoteToList = function (note) {
        this.notes.push(note);
    };
    return NoteList;
}());
var noteList = new NoteList();
var newNote = new Note('My first note', 'content of my first note.');
newNote.addNote();
var newNote = new Note('My second note', 'content of my second note.');
newNote.addNote();
console.log(noteList.notes);
