var mat1, mat2

function matrix1xmatrix2() {           
    // generateMatrix(numOfRows.value, numOfColumns.value)
    // generateMatrix(numOfRows2.value, numOfColumns2.value)     
    var mulmat12 = document.createElement('p')
    mulmat12.innerHTML = 'Multiplication of matrix 1 with matrix 2 is ' + math.matrix(math.multiply(mat1._data, mat2._data))
    document.getElementById('matopr').appendChild(mulmat12)
}
function matrix2xmatrix1() {        
    // generateMatrix(numOfRows.value , numOfColumns.value)
    // entries(numOfRows.value , numOfColumns.value)       
    var mulmat21 = document.createElement('p')
    mulmat21.innerHTML = 'Multiplication of matrix 2 with matrix 1 is ' + math.matrix(math.multiply(mat2._data, mat1._data))
    document.getElementById('matopr').appendChild(mulmat21)
}

function matrix1plusmatrix2() {                
    var addmat = document.createElement('p')
    addmat.innerHTML = 'Sum of both matrices is ' + math.matrix(math.add(mat1._data, mat2._data))
    document.getElementById('matopr').appendChild(addmat)
}

// console.log(elementAddress)

// console.log(document.getElementById(11).id)

// }
// function entries(numOfRows, numOfColumns) {

//     for (let i = 1; i <= numOfRows; i++) {
//         for (let j = 1; j <= numOfColumns; j++) {
//             var currentValue = document.getElementById("" + elementAddress[i - 1] + "" + elementAddress[j - 1] + "").value
//             console.log(currentValue)
//         }

//     }
//     console.log(elementArray)
// }
// if (document.getElementById(""))
//     document.getElementById("").style.visibility = "hidden"

function matrix1minusmatrix2() {                
    var sub12 = document.createElement('p')
    sub12.innerHTML = 'Subtraction of matrix 2 from matrix 1 is ' + math.matrix(math.subtract(mat1._data, mat2._data))
    document.getElementById('matopr').appendChild(sub12)
}
function matrix2minusmatrix1() {                 
    var sub21 = document.createElement('p')
    sub21.innerHTML = 'Subtraction of matrix 1 from matrix 2 is ' + math.matrix(math.subtract(mat2._data, mat1._data))
    document.getElementById('matopr').appendChild(sub21)
}

//console.log(getElementById("aa").value)
// console.log(document.getElementById(_id).id)

// console.log(document.getElementById(String(i) + String(j)).String(id))
// console.log(i,j)

var row1, col1, row2, col2

function numberOfMatrices() {                              
    var numOfMat = document.getElementById("numOfMat").value
    if (numOfMat == 1) {
        document.getElementById("mat").innerHTML = '<label for="row1">Rows: </label><input type="number" name="" id="row1"><br><label for="col1">Columns: </label><input type="number" name="" id="col1"><button onclick="rowcol()">Generate</button>'

    } else if (numOfMat == 2) {
        document.getElementById("mat").innerHTML = '<label for="row1">Rows for Matrix 1: </label><input type="number" name="" id="row1"><br><label for="col1">Columns for Matrix 1: </label><input type="number" name="" id="col1"><br><label for="row2">Rows for Matrix 2: </label><input type="number" name="" id="row2"><br><label for="col2">Columns for Matrix 2: </label><input type="number" name="" id="col2"><br><button onclick="rowcol1()">Generate</button>'
    }
    else {
        document.getElementById("mat").innerHTML = 'Error: Number of matrices can be either 1 or 2'
    }
}
function rowcol() {                               
    row1 = document.getElementById("row1").value
    col1 = document.getElementById("col1").value
    if (row1 < 2 || col1 < 2 || row1 > 5 || col1 > 5) {
        // document.getElementById("rowcol").innerHTML = 'rows and colums cannot be greater than 5 or less than 2'
        alert("Enter 2 to 5 rows and columns")
    } else {
        for (let i = 1; i <= row1; i++) {
            for (let j = 1; j <= col1; j++) {

                var node = document.createElement("p");
                node.innerHTML = '<label for="rowcolval">(' + i + ' , ' + j + '): </label><input type="number" id="row' + i + 'col' + j + 'val"><br>'
                document.getElementById('vals').appendChild(node)

            }

        }
        var proceedButton = document.createElement('span')
        proceedButton.innerHTML = 'Generate'
        proceedButton.setAttribute("onclick", "setmatrices()")
        document.getElementById('vals').appendChild(proceedButton)

    }
}

function setmatrices() {                                       
    for (let k = 1; k <= row1; k++) {
        for (let l = 1; l <= col1; l++) {
            console.log(document.getElementById('row' + k + 'col' + l + 'val').value)
            matrix1.push(parseInt(document.getElementById('row' + k + 'col' + l + 'val').value))
        }
    }
    var tempmat = math.matrix(matrix1)
    mat1 = math.reshape(tempmat, [row1, col1])
    console.log(mat1)

    document.getElementById('matopr').innerHTML = 'Your matrix is ' + mat1 + '<br><br>'
    var options = document.createElement('p')
    options.innerHTML = '<span onclick="deter()">Find Determinent</span><br><span onclick="transpose()">Find Transpose</span><br><span onclick="inverse()">Find Inverse</span><br><span onclick="addscalor()">Add Scalor</span><br><span onclick="multiplyscalor()">Multiply a scalor</span><br>'
    document.getElementById('matopr').appendChild(options)
}

function deter() {                                  
    if (row1 != col1) {
        var error1 = document.createElement('p')
        error1.innerHTML = "Error: Matrix must be square to find determinent"
        document.getElementById('matopr').appendChild(error1)
    } else {
        var deterResult = document.createElement('p')
        var determinent = math.det(mat1._data)
        deterResult.innerHTML = "Determinent of given Matrix is " + determinent
        document.getElementById('matopr').appendChild(deterResult)
    }
}
function transpose() {                              
    var transResult = document.createElement('p')
    var transpose1 = math.transpose(mat1._data)
    transResult.innerHTML = "Transpose of given Matrix is " + math.matrix(transpose1)
    document.getElementById('matopr').appendChild(transResult)
}
function inverse() {                                
    if (row1 != col1) {
        var error1 = document.createElement('p')
        error1.innerHTML = "Error: Matrix must be square to find inverse"
        document.getElementById('matopr').appendChild(error1)
    } else {
        var inverseResult = document.createElement('p')
        var inverse1 = math.inv(mat1._data)
        inverseResult.innerHTML = "Inverse of given Matrix is " + math.matrix(inverse1)
        document.getElementById('matopr').appendChild(inverseResult)
    }
}
function addscalor() {                          
    var addsc = document.createElement('p')
    addsc.innerHTML = '<label for="addsc">Enter scalor number to add to the matrix: </label><input type="number" name="" id="addsc"><span onclick="sumscalor()">ADD</span>'
    document.getElementById('matopr').appendChild(addsc)
}
function sumscalor() {                          
    var sumsc = document.createElement('p')
    sumsc.innerHTML = 'Sum is ' + math.matrix(math.add(mat1._data, parseInt(document.getElementById("addsc").value)))
    document.getElementById('matopr').appendChild(sumsc)
}
function multiplyscalor() {                     
    var mulsc = document.createElement('p')
    mulsc.innerHTML = '<label for="mulsc">Enter scalor number to Multiply to the matrix: </label><input type="number" name="" id="mulsc"><span onclick="mulscalor()">MULTIPLY</span>'
    document.getElementById('matopr').appendChild(mulsc)
}
function mulscalor() {                         
    var mulsc = document.createElement('p')
    mulsc.innerHTML = 'Product is ' + math.matrix(math.multiply(mat1._data, parseInt(document.getElementById("mulsc").value)))
    document.getElementById('matopr').appendChild(mulsc)
}


//For 2 matrices

function rowcol1() {                                   
    row1 = document.getElementById("row1").value
    col1 = document.getElementById("col1").value
    row2 = document.getElementById("row2").value
    col2 = document.getElementById("col2").value
    if (row1 < 2 || col1 < 2 || row1 > 5 || col1 > 5 || row2 < 2 || col2 < 2 || row2 > 5 || col2 > 5) {
        // document.getElementById("rowcol").innerHTML = 'rows and colums cannot be greater than 5 or less than 2'
        alert("Enter 2 to 5 rows and columns")
    } else {
        for (let i = 1; i <= row1; i++) {                    
            for (let j = 1; j <= col1; j++) {

                var node = document.createElement("p");
                node.innerHTML = '<label for="rowcolval">(' + i + ' , ' + j + ') for matrix 1: </label><input type="number" id="row' + i + 'col' + j + 'valmat1"><br>'
                document.getElementById('vals').appendChild(node)

            }

        }
        for (let i = 1; i <= row2; i++) {                      
            for (let j = 1; j <= col2; j++) {

                var node = document.createElement("p");
                node.innerHTML = '<label for="rowcolval">(' + i + ' , ' + j + ') for matrix 2: </label><input type="number" id="row' + i + 'col' + j + 'valmat2"><br>'
                document.getElementById('vals').appendChild(node)

            }

        }
        var proceedButton = document.createElement('span')
        proceedButton.innerHTML = 'Evaluate'
        proceedButton.setAttribute("onclick", "setmatrices2()")
        document.getElementById('vals').appendChild(proceedButton)

    }
}
var matrix1 = [];
var matrix2 = [];
//for taking elements of matrices in an array and converting them to matrices
function setmatrices2() {
    for (let k = 1; k <= row1; k++) {
        for (let l = 1; l <= col1; l++) {
            console.log(document.getElementById('row' + k + 'col' + l + 'valmat1').value)
            matrix1.push(parseInt(document.getElementById('row' + k + 'col' + l + 'valmat1').value))
        }
    }
    for (let k = 1; k <= row2; k++) {
        for (let l = 1; l <= col2; l++) {
            console.log(document.getElementById('row' + k + 'col' + l + 'valmat2').value)
            matrix2.push(parseInt(document.getElementById('row' + k + 'col' + l + 'valmat2').value))
        }
    }



    var tempmat1 = math.matrix(matrix1)
    var tempmat2 = math.matrix(matrix2)
    mat1 = math.reshape(tempmat1, [row1, col1])
    mat2 = math.reshape(tempmat2, [row2, col2])


    document.getElementById('matopr').innerHTML = 'Your matrix first matrix is ' + mat1 + ' and second matrix is ' + mat2 + '<br><br>'
    var options = document.createElement('p')
    options.innerHTML = '<span onclick="matrix1xmatrix2()">Multiply the first matrix with the second</span><br><span onclick="matrix2xmatrix1()">Multiply the second matrix with first</span><br><span onclick="matrix1plusmatrix2()">Add both matrices</span><br><span onclick="matrix2minusmatrix1()">Subtract the first matrix from second</span><br><span onclick="matrix1minusmatrix2()">Subtract the second matrix from the first</span><br>'
    document.getElementById('matopr').appendChild(options)
}
