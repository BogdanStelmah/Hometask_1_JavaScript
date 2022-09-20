import {createNotes} from "../repositories/notes.repository.js";
import {renderComponents} from "../app.js";

const buttonCreateNote = document.querySelector('#button_create_note');
const buttonCancelCreateNote = document.querySelector('#button__create__cancel');
const createModal = document.querySelector('.create_modal');
const createForm = document.querySelector('.modal__form');

//Display the note creation modal window
buttonCreateNote.addEventListener('click', (e) => {
    document.querySelector('body').classList.add('overflow__hidden')
    createModal.classList.add('show')
})

//Hiding the note creation modal window
buttonCancelCreateNote.addEventListener('click', (e) => {
    document.querySelector('body').classList.remove('overflow__hidden')
    createModal.classList.remove('show')
})

//Submit the creation form
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newNote = {
        name: createForm.elements['name'].value,
        category: createForm.elements['category'].value,
        content: createForm.elements['content'].value,
    }

    createNotes(newNote);
    renderComponents();

    document.querySelector('body').classList.remove('overflow__hidden');
    createModal.classList.remove('show');

    createForm.reset();
})