class Note {
    title: string;
    content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    addNote() {
        const newNote = { title: this.title, content: this.content };
        noteList.addNoteToList(newNote);
    }
}

class NoteList {
    notes: { title: string, content: string }[] = [];

    addNoteToList(note: { title: string, content: string }) {
        this.notes.push(note);
    }
}

const noteList = new NoteList();

const newNote = new Note('My first note', 'content of my first note.');
newNote.addNote();

console.log(noteList.notes);