import {renderNotes} from "./render-components/note.js";
import {renderCategory} from "./render-components/category.js";
import {renderArchiveNotes} from "./render-components/archived-notes.js";
import {updateFieldsActive, updateFieldsArchived} from "./repositories/catecories.repository.js";

const tableNotes = document.querySelector('#table__notes > tbody');
const tableCategories = document.querySelector('#table__category > tbody');
const tableArchivedNotes = document.querySelector('#table__archived__notes > tbody');

window.onload = () => {
    renderComponents();
}

export const renderComponents = () => {
    updateFieldsActive();
    updateFieldsArchived();

    renderCategory(tableCategories);
    renderNotes(tableNotes);
    renderArchiveNotes(tableArchivedNotes);
}


