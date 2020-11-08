
function createMatrix(rows, columns) { return Array.from(Array(rows), () => Array.from(new Array(columns))); };

/**
 * Alternate between rows and columns of 2D Array and returns it
 */
function reverseMatrix(matrix) {
    const rows = matrix.length || 0;
    const columns = matrix[0] instanceof Array ? matrix[0].length : 0;
    if (rows === 0 || columns === 0) return [];
    let reversedArray = createMatrix(columns, rows);
    for (let i = 0; i < rows; i++)
        for (let j = 0; j < columns; j++) reversedArray[j][i] = matrix[i][j];
    return reversedArray;
};

/**
 * Returns a chosen column of a 2D array as an array
 * @param {number[][]} matrix
 * @param {integer} columnNum
 * @returns {Array.<number>}
 */
function getColumnArr(matrix, columnNum) {
    if (columnNum >= 0 && columnNum <= matrix.length) {
        const columnArr = new Array(matrix[0].length);
        for (let index = 0; index < matrix.length; index++)
            columnArr[index] = matrix[index][columnNum];
        return columnArr;
    }
};

/**
 * a Limens
 * @typedef {Object} Limens
 * @property {integer} funcNum prefrence function number
 * @property {number} q indifference limen
 * @property {number} p preference limen
 */
/**
 * @function applyPrefFunc 
 * @param {number} diffrence diffrence of a pairwise comparaison
 * @param {Object} Limens a {@link Limens} 
 * @returns {number} f(diffrence)
 */
function applyPrefFunc(diffrence, Limens) {
    diffrence = (diffrence < 0) ? 0 : diffrence;
    let result;
    switch (Limens.funcNum) {
        case 1:
            result = (diffrence > 0) ? 1 : 0;
            break;
        case 2:
            result = (diffrence > Limens.q) ? 1 : 0;
            break;
        case 3:
            result = (diffrence < Limens.p) ? diffrence / Limens.p : 1;
            break;
        case 4:
            result = (diffrence < Limens.q) ? 0 : (diffrence < Limens.p) ? 0.5 : 1;
            break;
        case 5:
            result = (diffrence < Limens.q) ? 0 : (diffrence < Limens.p) ? (diffrence - Limens.q) / (Limens.p - Limens.q) : 1;
            break;
    }
    return result;
};

/**
 * Proceed the decision support methode PROMETHEE II
 * @param {!integer} NB_ACTIONS 
 * @param {!integer} NB_CRITERIAS 
 * @param {number[][]} ACMatrix Actions x Criterias (rows x columns) 2D array
 * @param {Array.<number>} weightsArr criterias weights array
 * @param {Array.<boolean>} isCriteriaToMax maximize or minimize criterias array
 * @param {Array.<Object>} prefrenceFunc array of {@link Limens}
 * @returns {number[][]} Array of Action(alternatives) ranking (by their index number), and net flow score
 */
function promethee2(NB_ACTIONS, NB_CRITERIAS, ACMatrix, weightsArr, isCriteriaToMax, prefrenceFunc) {
    const CAMatrix = reverseMatrix(ACMatrix);
    console.groupCollapsed("Input Matrix");
    console.table(ACMatrix);
    console.table(CAMatrix);
    console.groupEnd();

    const normalizedCAMatrix = createMatrix(NB_CRITERIAS, NB_ACTIONS);
    for (let iC = 0; iC < NB_CRITERIAS; iC++) {
        const max = Math.max(...CAMatrix[iC]);
        const min = Math.min(...CAMatrix[iC]);
        const average = max - min;
        for (let iA = 0; iA < NB_ACTIONS; iA++) {
            if (isCriteriaToMax[iC]) normalizedCAMatrix[iC][iA] = (CAMatrix[iC][iA] - min) / average;
            else normalizedCAMatrix[iC][iA] = (max - CAMatrix[iC][iA]) / average;
        }
    }

    const normalizedACMatrix = reverseMatrix(normalizedCAMatrix);
    console.groupCollapsed("Normalized Matrix");
    console.table(normalizedACMatrix);
    console.table(normalizedCAMatrix);
    console.groupEnd();


    const diffrencesMatrix = createMatrix(NB_ACTIONS ** 2, NB_CRITERIAS);
    for (let iC = 0; iC < NB_CRITERIAS; iC++) {
        let i = 0, j = 0;
        for (let iACouple = 0; iACouple < diffrencesMatrix.length; iACouple++) {
            const diffrence = normalizedACMatrix[i][iC] - normalizedACMatrix[j][iC];
            diffrencesMatrix[iACouple][iC] = weightsArr[iC] * applyPrefFunc(diffrence, prefrenceFunc[iC]);
            j = ++j % NB_ACTIONS;
            if (j === 0) i = ++i % NB_ACTIONS;
        }
    }
    console.groupCollapsed("Diffrences Matrix");
    console.table(diffrencesMatrix);
    console.groupEnd();

    const preferencesDegreesMatrix = createMatrix(NB_ACTIONS, NB_ACTIONS);
    const sumWeights = weightsArr.reduce((a, b) => a + b, 0);
    let i = 0, j = 0;
    for (let iACouple = 0; iACouple < NB_ACTIONS ** 2; iACouple++) {
        preferencesDegreesMatrix[i][j] = diffrencesMatrix[iACouple].reduce((a, b) => a + b, 0) / sumWeights;
        j = ++j % NB_ACTIONS;
        if (j === 0) i++;
    }
    console.groupCollapsed("Preferences Degrees Matrix");
    console.table(preferencesDegreesMatrix);
    console.groupEnd();

    const flowMatrix = createMatrix(NB_ACTIONS, 3);
    for (let i = 0; i < NB_ACTIONS; i++) {
        flowMatrix[i][0] = preferencesDegreesMatrix[i].reduce((a, b) => a + b, 0);
        flowMatrix[i][1] = getColumnArr(preferencesDegreesMatrix, i).reduce((a, b) => a + b, 0);
        flowMatrix[i][2] = flowMatrix[i][0] - flowMatrix[i][1];
    }
    console.groupCollapsed("Flow Matrix (positive, negative, net)");
    console.table(flowMatrix);
    console.groupEnd();

    const rankArr = createMatrix(NB_ACTIONS, 2);
    for (let i = 0; i < NB_ACTIONS; i++) {
        rankArr[i][0] = i;
        rankArr[i][1] = flowMatrix[i][2];
    }
    rankArr.sort(function (a, b) {
        return b[1] - a[1];
    });
    console.table(rankArr);


    console.log("PROMETHEE II Ranking :");
    for (let i = 0; i < rankArr.length; i++) {
        console.log(`${i + 1}- Action n°${rankArr[i][0] + 1}`);
    }
    return rankArr;
};

//TODO promethee2(NB_ACTIONS, NB_CRITERIAS, ACMatrix, weightsArr, isCriteriaToMax, prefrenceFunc)
