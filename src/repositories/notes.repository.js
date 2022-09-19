import {getImageSrcByName} from "./catecories.repository.js";

const generateKey = () => {
    return Math.random().toString().split('.')[1].substring(0, 12);
}

let notes = [
    {
        key: generateKey(),
        image: '../image/shopping-cart.png',
        name: 'Shopping list',
        created: 'May 08, 2021',
        category: 'Task',
        content: 'Tomatoes, bread',
        dates: '4/7/2022'
    },
    {
        key: generateKey(),
        image: '../image/idea.png',
        name: 'New Feature',
        created: 'May 05, 2021',
        category: 'Idea',
        content: 'New 3/5/2021',
        dates: '3/5/2021'
    }
];

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

    const dateReg = /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/g;
    const dates = note.content.match(dateReg)
    if (Array.isArray(dates)) {
        note.dates = dates.join(', ')
    } else {
        note.dates = ''
    }

    notes.push(note);
}
