import {clearTable, renderFieldsForNote, renderImage} from "./table-render-tools.js";
import {getArchivedNotes, unarchivedNote} from "../repositories/archived-notes.repository.js";
import {renderComponents} from "../app.js";

export const renderArchiveNotes = (tableArchiveNotes) => {
    clearTable(tableArchiveNotes);

    const archivedNotes = getArchivedNotes();

    archivedNotes.map(item => {
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
        const fieldsName = ['name', 'category', 'content'];
        renderFieldsForNote(item, fieldsName, tr);

        //Rendering button for unarchived
        td = document.createElement('td')
        image = renderImage('https://cdn-icons-png.flaticon.com/512/1388/1388796.png',`image__category  unarchived`);
        image.addEventListener('click', (e) => {
            unarchivedNote(item.key);

            renderComponents();
        })
        td.appendChild(image)

        tr.appendChild(td)
        tableArchiveNotes.appendChild(tr)
    })
}