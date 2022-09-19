import {renderNotes} from "./render-components/note.js";
import {renderCategory} from "./render-components/category.js";
import {createNotes} from "./repositories/notes.repository.js";

const tableNotes = document.querySelector('#table__notes > tbody');
const tableCategories = document.querySelector('#table__category > tbody');
const buttonCreateNote = document.querySelector('#button_create_note');
const buttonCancelCreateNote = document.querySelector('#button__cancel');
const createModal = document.querySelector('.create_modal');
const createForm = document.querySelector('.modal__form');

window.onload = () => {
    renderComponents();
}

buttonCreateNote.addEventListener('click', (e) => {
    createModal.classList.add('show')
})

buttonCancelCreateNote.addEventListener('click', (e) => {
    createModal.classList.remove('show')
})

createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newNote = {
        name: createForm.elements['name'].value,
        category: createForm.elements['category'].value,
        content: createForm.elements['content'].value,
    }

    createNotes(newNote);
    renderComponents();

    createModal.classList.remove('show');
    createForm.reset();
})

const renderComponents = () => {
    renderCategory(tableCategories);
    renderNotes(tableNotes);
}


