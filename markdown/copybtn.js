// console.log("I will add copy button for codes.")

function createCopyButtons()
{
    // find the pre tag and create buttons
    preBlocks = document.getElementsByTagName("pre");
    console.log('Pre Block count:' + preBlocks.length)
    for (idx = 0; idx < preBlocks.length; ++idx) {
        btnId = "code-btn-" + (idx + 1)
        preDivId = 'codestyle-pre-div-' + (idx + 1)
        btn_elem = document.createElement("button")
        btn_elem.setAttribute('id', btnId)
        btn_elem.setAttribute('pre-div-id', preDivId)
        btn_elem.className = 'codestyle-copy-btn'
        btn_elem.onclick = onBtnClicked;
        icon = document.createElement('i')
        icon.className = 'fa-regular fa-copy '
        btn_elem.appendChild(icon)

        preBlocks[idx].setAttribute('id', preDivId)
        preBlocks[idx].classList.add('codestyle-pre-div')
        preBlocks[idx].appendChild(btn_elem)
    }
}

function getTextRecursive(div)
{
    let line = ''
    if (div.children.length == 0) {

        line = div.innerText
        if (div.classList.contains('hljs-keyword')) {
            line += ' '
        }
        return line
    } else {
        for(let j = 0; j < div.children.length; ++j) {
            child = div.children[j]
            line += getTextRecursive(child)
        }
        return line
    }
}

function onBtnClicked(e)
{
    preDivId = this.getAttribute('pre-div-id')
    preBlock = document.getElementById(preDivId)
    codeLineDivs = preBlock.getElementsByClassName('hljs-ln-code')
    codeLines = []

    console.log(codeLineDivs.length)
    for (let i = 0; i < codeLineDivs.length; ++i) {
        codeLineDiv = codeLineDivs[i].children[0]
        if (codeLineDiv.children.length == 0) {
            // blank line
            codeLines.push(codeLineDiv.innerText)
        } else {
            // read code from span
            
            codeLine = getTextRecursive(codeLineDiv)
            codeLines.push(codeLine)
            
        }
        console.log(codeLineDiv.children.length)
    }
    codes = codeLines.join('\n')
    console.log(codes)
}


createCopyButtons()