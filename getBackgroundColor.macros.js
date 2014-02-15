// Позволяет пробежаться по столбцу
// Проверить совпадение цветов 
// Если совпадает, то записать номер ряда совпадающей ячейки в массив
function myFunction() {
  var cellArray = [];
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  for (var i = 1; i < 3647; i++) {
    var range = sheet.getRange(i, 1);
    var color = range.getBackground();
    if (color == '#FFF2CC' || color == '#fff2cc') {
      cellArray.push(range.getRow());
    }
  }
  Logger.log(cellArray);
}
