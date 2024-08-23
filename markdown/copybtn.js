console.log("I will add copy button for codes.")

function createCopyButtons()
{
    // find the pre tag and create buttons
    preBlocks = document.getElementsByTagName("pre");
    console.log('Pre Block count:' + preBlocks.length)
    for (idx = 0; idx < preBlocks.length; ++idx) {
        btn_id = "code-btn-" + (idx + 1)
        btn_elem = document.createElement("button")
        btn_elem.setAttribute('id', btn_id)
        btn_elem.className = 'codestyle-copy-btn'

        icon = document.createElement('i')
        icon.className = 'fa-regular fa-copy '
        btn_elem.appendChild(icon)

        preBlocks[idx].classList.add('codestyle-pre-div')
        preBlocks[idx].appendChild(btn_elem)

    }
}

createCopyButtons()