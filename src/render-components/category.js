import {clearTable, renderFieldsForNote, renderImage} from "./table-render-tools.js";
import {categories} from "../repositories/catecories.repository.js";

export const renderCategory = (tableCategories) => {
    clearTable(tableCategories)

    categories.map(category => {
        let tr = document.createElement('tr')
        let td = document.createElement('td')

        //Image rendering with class and src
        let image = renderImage(category.imageSrc, 'image__category');

        //Rendering of the block for the picture
        let div = document.createElement('div')
        div.className = 'notes__image'
        div.appendChild(image)
        td.appendChild(div)
        tr.appendChild(td)

        //Rendering of category information fields
        let fieldsName = ['name', 'active', 'archived'];
        renderFieldsForNote(category, fieldsName, tr);

        tableCategories.appendChild(tr)
    })
}