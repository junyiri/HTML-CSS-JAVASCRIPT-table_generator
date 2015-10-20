var generateTable = function(){

  var rows = parseInt(document.getElementById("rowsField").value);
  var cols = parseInt(document.getElementById("colsField").value);

  document.getElementById("result").innerHTML = "";

  var table = document.createElement("table");

  for (var r = 0; r < rows; r++) {
    var row = table.insertRow();

    for (var c = 0; c < cols; c++) {
      var cell = row.insertCell();
      cell.innerHTML = parseInt(row.rowIndex + 1) + "." + parseInt(cell.cellIndex + 1);
    }

  }

  var result = document.getElementById("result");
  result.appendChild(table);

};
