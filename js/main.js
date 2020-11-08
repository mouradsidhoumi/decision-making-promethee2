
const inputFile = document.getElementById('inputFile');
inputFile.addEventListener('change', importFile);

document.getElementById('btnUpload').addEventListener('click', () => {
    inputFile.click();
});

document.getElementById('btnStart').addEventListener('click', () => {
    const form = document.forms['form'];
    if (form.checkValidity()) {
        const NB_ACTIONS = document.forms['form']['nbActions'].value;
        const NB_CRITERIAS = document.forms['form']['nbCriterias'].value;
        generateTable(Math.min(10, NB_ACTIONS), Math.min(10, NB_CRITERIAS),
            isByUpload = false, isPart2Included = null, uploaded2DArr = null);
    }
});

/**
 * Generate an html table, and display it, empty or with data from uploaded excel file
 * @param {!integer} NB_ACTIONS 
 * @param {!integer} NB_CRITERIAS 
 * @param {boolean} isByUpload 
 * @param {?boolean} isPart2Included bool for 'does the 5 rows of parameters included'
 * @param {?Array.<Array>} uploaded2DArr 
 */
function generateTable(NB_ACTIONS, NB_CRITERIAS, isByUpload, isPart2Included, uploaded2DArr) {
    table = document.createElement('table');
    table.classList.add('table', 'mx-0', 'table-bordered', 'table-hover', `${(NB_ACTIONS > 8) ? 'table-sm' : 'table-md'}`);

    tr = table.insertRow();
    tr.innerHTML = `<th scope='col' contenteditable>${(isByUpload) ? uploaded2DArr[0][0] || 'Title' : 'Title'}</th>`;
    for (let j = 1; j <= NB_CRITERIAS; j++) {
        tr.innerHTML += `<th scope='col' contenteditable>${(isByUpload) ? uploaded2DArr[0][j] || `Criteria ${j}` : `Criteria ${j}`}</th>`;
    }
    let iRow = 1;
    for (iRow; iRow <= NB_ACTIONS; iRow++) {
        tr = table.insertRow();
        tr.innerHTML = `<th scope='row' class='actionName'contenteditable>${(isByUpload) ? uploaded2DArr[iRow][0] || `Action ${iRow}` : `Action ${iRow}`}</th>`;
        for (let j = 1; j <= NB_CRITERIAS; j++) {
            tr.innerHTML += `<td class='inputMatrix' contenteditable>${(isByUpload) ? parseFloat(uploaded2DArr[iRow][j]) || "" : ""}</td>`;
        }
    }

    tr = table.insertRow();
    tr.innerHTML = `<th scope='row'>Criteria Weigth</th>`;
    for (let j = 1; j <= NB_CRITERIAS; j++) {
        tr.innerHTML += `<td class='inputCriteriaWeigth' contenteditable>${(isByUpload && isPart2Included) ? parseFloat(uploaded2DArr[iRow][j]) : ""}</td>`;
    }

    function nextRow() {
        iRow++;
        tr = table.insertRow();
    }

    nextRow();
    tr.innerHTML = `<th scope='row'>Is it to Maximize?</th>`;
    function isKindOfNo(value) {
        return (value === 0) ?
            true
            : (typeof value === 'string') ?
                ['no', 'false', 'min', '0'].some(kindOfNo => value.includes(kindOfNo))
                : false
    };
    for (let j = 1; j <= NB_CRITERIAS; j++) {
        tr.innerHTML += `<td class='align-middle text-center'><div class='form-check text-center'>
                                 <input class='inputIsCriteriaToMax form-check-input position-static' type='checkbox' ${(isByUpload && isPart2Included) ? (isKindOfNo(uploaded2DArr[iRow][j])) ? "" : 'checked' : 'checked'}>
                                 </div>
                             </td>`;
    }

    nextRow();
    tr.innerHTML = `<th scope='row' class='align-middle'>Prefrence Fonction</th>`;
    const functionsNames = ['Usuel', 'U-shape', 'V-shape', 'Level', 'Linear', 'Gaussian'];
    function generateSelect(selectedOption) {
        const selectList = document.createElement('select');
        selectList.classList.add('inputPrefrenceFuncNum', 'custom-select');
        selectList.required = true;
        for (let i = 0; i < functionsNames.length; i++) {
            let soption = document.createElement('option');
            soption.text = functionsNames[i];
            soption.value = i + 1;
            selectList.appendChild(soption);
        };
        selectList[5].disabled = true;
        if (selectedOption >= 1 && selectedOption < 6) selectList.selectedIndex = selectedOption - 1;
        else selectList.selectedIndex = 0;
        return selectList;
    }
    for (let j = 1; j <= NB_CRITERIAS; j++) {
        const td = tr.insertCell();
        td.classList.add('align-middle');
        td.appendChild(generateSelect((isByUpload && isPart2Included) ? parseInt(uploaded2DArr[iRow][j]) || 1 : 1));
    }

    nextRow();
    tr.innerHTML = `<th scope='row'>Indifference Limen</th>`;
    for (let j = 1; j <= NB_CRITERIAS; j++) {
        tr.innerHTML += `<td class='inputLimenQ' contenteditable='true'>${(isByUpload && isPart2Included) ? (isNaN(uploaded2DArr[iRow][j])) ? "" : parseFloat(uploaded2DArr[iRow][j]) : ""}</td>`;
    }

    nextRow();
    tr.innerHTML = `<th scope='row'>Preference Limen</th>`;
    for (let j = 1; j <= NB_CRITERIAS; j++) {
        tr.innerHTML += `<td class='inputLimenP' contenteditable='true'>${(isByUpload && isPart2Included) ? (isNaN(uploaded2DArr[iRow][j])) ? "" : parseFloat(uploaded2DArr[iRow][j]) : ""}</td>`;
    }


    instruction = document.createElement('p');
    instruction.classList.add('lead', 'text-center');
    instruction.innerHTML = `${(isByUpload) ? 'Edit values &' : 'Enter values, rename criterias & actions if you want, and'} use the <kbd>Tab⇆</kbd> key board to jumb between cells`;

    document.getElementById('table-container').innerHTML = "";
    document.getElementById('table-container').appendChild(instruction);
    document.getElementById('table-container').appendChild(table);
    tdTapingRestrict();
    doneInputBtn = document.createElement('button');
    doneInputBtn.id = 'doneInputbtn';
    doneInputBtn.innerText = 'Done';
    doneInputBtn.classList.add('btn', 'btn-primary', 'float-right');
    document.getElementById('table-container').appendChild(doneInputBtn);
    document.getElementById('doneInputbtn').addEventListener('click', () => loadInputs(NB_ACTIONS, NB_CRITERIAS));
    instruction.scrollIntoView();
}

function importFile(evt) {
    const f = evt.target.files[0];
    if (f) {
        const reader = new FileReader();
        reader.onload = e => {
            const contents = processExcelTo2DArray(e.target.result);
            console.groupCollapsed('Uploaded Table');
            console.table(contents);
            console.groupEnd();
            const isPart2Included = document.getElementById('chkPart2Included').checked;
            const NB_ACTIONS = contents.length - (isPart2Included) ? 6 : 1;
            const NB_CRITERIAS = contents[1].length - 1;
            generateTable(NB_ACTIONS, NB_CRITERIAS, isByUpload = true, isPart2Included, contents);
        }
        reader.readAsBinaryString(f);
    } else {
        alert('Failed to load file');
    }
}

function processExcelTo2DArray(data) {
    const workbook = XLSX.read(data, {
        type: 'binary'
    });
    const result = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 1 });
    return result;
}

/**
 * When user fills 'editable <td>' with keyboard, it accepts only numbers, '.' and ','
 */
function tdTapingRestrict() {
    $('td').keypress(e => {
        var x = event.charCode || event.keyCode;
        if (isNaN(String.fromCharCode(e.which)) && x != 46 || x === 32 || x === 13 || (x === 46 && event.currentTarget.innerText.includes('.'))) e.preventDefault();
    });
}

/**
 * Charge inputed values to arrays, calls promethee2(), and display rank result
 * @param {!integer} NB_ACTIONS 
 * @param {!integer} NB_CRITERIAS 
 */
function loadInputs(NB_ACTIONS, NB_CRITERIAS) {
    const table = document.querySelector('table');

    const matrix = createMatrix(NB_ACTIONS, NB_CRITERIAS);
    const inputsMatrix = table.getElementsByClassName('inputMatrix');
    let i = j = 0;
    for (const elt of inputsMatrix) {
        matrix[i][j] = parseFloat(elt.textContent) || 0;
        j = ++j % NB_CRITERIAS;
        if (j === 0) i++;
    }

    const weightsArr = new Array(NB_CRITERIAS);
    const inputsWeights = table.getElementsByClassName('inputCriteriaWeigth');
    for (let i = 0; i < NB_CRITERIAS; i++) {
        weightsArr[i] = parseFloat(inputsWeights[i].textContent) || 0;
    }

    const isCriteriaToMaxArr = new Array(NB_CRITERIAS);
    const inputsIsCriteriaToMax = table.getElementsByClassName('inputIsCriteriaToMax');
    for (let i = 0; i < NB_CRITERIAS; i++) {
        isCriteriaToMaxArr[i] = inputsIsCriteriaToMax[i].checked;
    }

    const prefrenceFuncArr = new Array(NB_CRITERIAS);
    const inputsPrefrenceFuncNum = table.getElementsByClassName('inputPrefrenceFuncNum');
    const inputsLimensQ = table.getElementsByClassName('inputLimenQ');
    const inputsLimensP = table.getElementsByClassName('inputLimenP');

    for (let i = 0; i < NB_CRITERIAS; i++) {
        prefrenceFuncArr.splice(i, 0, new Object(
            {
                funcNum: parseInt(inputsPrefrenceFuncNum[i].value) || 1,
                q: parseFloat(inputsLimensQ[i].textContent) || 0,
                p: parseFloat(inputsLimensP[i].textContent) || 0
            }));
    }

    const rank = promethee2(NB_ACTIONS, NB_CRITERIAS, matrix, weightsArr, isCriteriaToMaxArr, prefrenceFuncArr);

    const tableResult = document.createElement('table');
    document.getElementById('table-container').innerHTML += '<h2 class="text-center">Rank Result:</h2>';
    const actionsNames = table.getElementsByClassName('actionName');
    tableResult.classList.add('table', 'table-sm', 'col-md-6', 'table-borderless', 'table-striped', 'mx-auto');
    tableResult.innerHTML = `<tr>
                                <th scope='col' class='align-middle'>🏆</th>
                                <th scope='col' class='align-middle'>Action</th>
                                <th scope='col' class='align-middle'>Net Flow Score</th>   
                            </tr>`;
    let tbody = tableResult.createTBody();
    for (let i = 0; i < NB_ACTIONS; i++) {
        let row = tbody.insertRow();
        row.innerHTML += `<tr>                        
                                <td>
                                <div class='badge badge-primary badge-pill'>${i + 1}</div>
                                </td>
                                <td>                               
                                a${rank[i][0] + 1}, ${actionsNames[rank[i][0]].textContent}
                                </td>
                                <td>
                                ${parseFloat(rank[i][1]).toFixed(3)}
                                </td>
                                </tr>`

    }
    document.getElementById('table-container').appendChild(tableResult);
    tableResult.scrollIntoView();
}
