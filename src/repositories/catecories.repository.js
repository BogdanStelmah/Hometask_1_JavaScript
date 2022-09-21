import {getNotes} from "./notes.repository.js";
import {getArchivedNotes} from "./archived-notes.repository.js";

export let categories = [
    {
        name: 'Task',
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
        active: 0,
        archived: 0
    },
    {
        name: 'Random Thought',
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/775/775558.png',
        active: 0,
        archived: 0
    },
    {
        name: 'Idea',
        imageSrc: 'https://cdn-icons-png.flaticon.com/512/2011/2011672.png',
        active: 0,
        archived: 0
    }
];

export const getImageSrcByName = (name) => {
    return categories.filter(category => category.name === name)?.[0].imageSrc
}

export const updateFieldsActive = () => {
    const notes = getNotes();
    const numberNotes = numberNotesByCategory(notes);

    categories.map(category => {
        category.active = numberNotes[category.name] || 0
    })
}

export const updateFieldsArchived = () => {
    const archivedNotes = getArchivedNotes();
    const numberNotes = numberNotesByCategory(archivedNotes);

    categories.map(category => {
        category.archived = numberNotes[category.name] || 0
    })
}

const numberNotesByCategory = (notes) => {
    return  notes.reduce((group, note) => {
        const {category} = note;

        group[category] = group[category] || 0;
        group[category] += 1

        return group;
    }, {})
}