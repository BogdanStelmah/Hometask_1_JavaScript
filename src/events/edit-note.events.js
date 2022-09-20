import {renderComponents} from "../app.js";
import {editNotes} from "../repositories/notes.repository.js";

const editModal = document.querySelector('.edit_modal');
const buttonCancelEditNote = document.querySelector('#button__edit__cancel');
const editForm = document.querySelector('.modal__edit__form');

let editingNote = {}

//Display a modal window and add information about the note
export const showEditModal = (item) => {
    document.querySelector('body').classList.add('overflow__hidden')
    editModal.classList.add('show')

    document.getElementById('name').value = item.name
    document.getElementById('category').value = item.category
    document.getElementById('content').value = item.content

    editingNote = item
}

//Hiding the modal edit window
buttonCancelEditNote.addEventListener('click', (e) => {
    document.querySelector('body').classList.remove('overflow__hidden');
    editModal.classList.remove('show');
})

//Submit an edit form
editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    editingNote = {
        ...editingNote,
        name: editForm.elements['name'].value,
        category: editForm.elements['category'].value,
        content: editForm.elements['content'].value,
    }

    editNotes(editingNote)
    renderComponents();

    document.querySelector('body').classList.remove('overflow__hidden');
    editModal.classList.remove('show');
    editForm.reset();
})