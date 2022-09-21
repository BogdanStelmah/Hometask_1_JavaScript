import {getImageSrcByName} from "./catecories.repository.js";
import {addArchivedNotes} from "./archived-notes.repository.js";

//Generates a unique id for the note
export const generateKey = () => {
    return Math.random().toString().split('.')[1].substring(0, 12);
}

export const deleteNote = (noteId) => {
    notes = notes.filter(note => note.key !== noteId);
}

export const getNotes = () => {
    return notes;
}

export const createNotes = (note) => {
    note.key = generateKey();
    note.image = getImageSrcByName(note.category);
    note.created = new Date().toLocaleString('en-US', {month: "short", day: "numeric", year: "numeric"})
    note.dates = dateSearch(note.content);

    notes.push(note);
}

export const addNote = (note) => notes.push(note)

export const archivedNote = (id) => {
    const noteIndex = notes.findIndex(note => note.key === id);
    addArchivedNotes(notes[noteIndex]);

    notes = notes.filter(note => note.key !== id);
}

export const editNotes = (item) => {
    notes.filter(note => {
        if (note.key === item.key) {
            note.name = item.name
            note.image = getImageSrcByName(item.category);
            note.content = item.content;
            note.category = item.category;
            note.dates = dateSearch(note.content);
        }
    })
}

//Regular expression for finding dates
const dateSearch = (content) => {
    const dateReg = /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/g;
    const dates = content.match(dateReg);
    if (Array.isArray(dates)) {
        return dates.join(', ')
    }

    return '';
}

let notes = [
    {
        key: generateKey(),
        image: 'https://cdn-icons-png.flaticon.com/512/2011/2011672.png',
        name: 'New Feature',
        created: 'May 05, 2021',
        category: 'Idea',
        content: 'Feature 3/5/2021',
        dates: '3/5/2021'
    },
    {
        key: generateKey(),
        image: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
        name: 'Books',
        created: 'May 15, 2021',
        category: 'Task',
        content: 'The Lean Startup',
        dates: ''
    },
    {
        key: generateKey(),
        image: 'https://cdn-icons-png.flaticon.com/512/775/775558.png',
        name: 'The theory of everything',
        created: 'April 27, 2021',
        category: 'Random Thought',
        content: 'The theory of everything',
        dates: ''
    },
    {
        key: generateKey(),
        image: 'https://cdn-icons-png.flaticon.com/512/2011/2011672.png',
        name: 'New Feature',
        created: 'May 05, 2021',
        category: 'Idea',
        content: 'New 3/5/2021',
        dates: '3/5/2021'
    },
    {
        key: generateKey(),
        image: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
        name: 'Fruits',
        created: 'May 20, 2021',
        category: 'Task',
        content: '',
        dates: ''
    }
];
