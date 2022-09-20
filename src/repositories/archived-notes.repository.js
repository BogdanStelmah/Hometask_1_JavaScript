import {addNote} from "./notes.repository.js";

let archivedNotes = [
    {
        key: '',
        image: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
        name: 'Shopping list',
        created: 'May 08, 2021',
        category: 'Task',
        content: 'Tomatoes, bread',
        dates: ''
    }
]

export const getArchivedNotes = () => {
    return archivedNotes;
}

export const addArchivedNotes = (note) => archivedNotes.push(note);

export const unarchivedNote = (id) => {
    const noteIndex = archivedNotes.findIndex(note => note.key === id);
    addNote(archivedNotes[noteIndex]);

    archivedNotes = archivedNotes.filter(note => note.key !== id);
}