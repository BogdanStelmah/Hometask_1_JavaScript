export const renderImage = (src, className) => {
    let image = document.createElement('img');
    image.src = src;
    image.className = className;
    return image;
}

export const renderFieldsForNote = (note, fields, tr) => {
    fields.map(nameFields => {
        let td = document.createElement('td')

        if (note[nameFields].length > 18) {
            td.innerText = note[nameFields].slice(0, 18) + '...'
            tr.appendChild(td)
            return
        }

        td.innerText = note[nameFields]
        tr.appendChild(td)
    })
}

export const clearTable = (table) => {
    const allRecords = table.querySelectorAll('tr')

    for (let i = 1; i < allRecords.length; i++) {
        allRecords[i].remove();
    }
}