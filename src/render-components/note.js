import {clearTable, renderFieldsForNote, renderImage} from "./table-render-tools.js";
import {deleteNote, getNotes} from "../repositories/notes.repository.js";

//Icon paths for note operations
const crudIcon = {
    edit: '../image/pencil.png',
    delete: '../image/delete.png',
    archiving: '../image/download-button%20(1).png',
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
                        break;
                    case 'delete':
                        deleteNote(item.key);
                        renderNotes(tableNotes);
                        break;
                    case 'archiving':
                        break;
                }
            })

            td.appendChild(image)
        }

        tr.appendChild(td)
        tableNotes.appendChild(tr)
    })
}