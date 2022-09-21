import {clearTable, renderFieldsForNote, renderImage} from "./table-render-tools.js";
import {archivedNote, deleteNote, getNotes} from "../repositories/notes.repository.js";
import {showEditModal} from "../events/edit-note.events.js";
import {renderComponents} from "../app.js";

//Icon paths for note operations
const crudIcon = {
    edit: ' https://cdn-icons-png.flaticon.com/512/650/650194.png',
    delete: ' https://cdn-icons-png.flaticon.com/512/565/565491.png',
    archiving: 'https://cdn-icons-png.flaticon.com/512/61/61016.png',
}

//Rendering of html notes
export const renderNotes = (tableNotes) => {
    clearTable(tableNotes);

    const notes = getNotes();

    notes.map(item => {
        let tr = document.createElement('tr')
        let td = document.createElement('td')

        //Image rendering with class and src
        let image = renderImage(item.image, 'image__category');

        //Rendering of the block for the picture
        let div = document.createElement('div')
        div.className = 'notes__image'
        div.appendChild(image)
        td.appendChild(div)
        tr.appendChild(td)

        //Rendering of note information fields
        const fieldsName = ['name', 'created', 'category', 'content', 'dates'];
        renderFieldsForNote(item, fieldsName, tr);

        //Rendering buttons for operations
        td = document.createElement('td')
        for (const fieldsKey in crudIcon) {
            image = renderImage(crudIcon[fieldsKey],`image__category ${fieldsKey}`);

            image.addEventListener('click', (e) => {
                switch (e.target.className.split(' ')[1]) {
                    case 'edit':
                        showEditModal(item);
                        break;
                    case 'delete':
                        deleteNote(item.key);
                        break;
                    case 'archiving':
                        archivedNote(item.key);
                        break;
                }
                renderComponents();
            })

            td.appendChild(image)
        }

        tr.appendChild(td)
        tableNotes.appendChild(tr)
    })
}