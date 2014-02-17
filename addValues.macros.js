function myFunction() {
  
  // Id папки:
  var folder_id = '0B2UnNwH9z0BldEFKcnBLMnNzYWM';
  
  // Ряд значений, который необходимо записать:
  var arr = ['Подъезд', 'porch', 'числа'];
  
  // Название листа в который необходимо добавить изменения:
  var sheet_name = 'адрес001';
  
  // Номер ряда в который будут вставляться значения:
  var y = 10;
  
  var folder = DocsList.getFolderById(folder_id);
  var file = folder.getFiles();
  for (var i in file) {
  var file = folder.getFiles()[i];
    var spreadsheet = SpreadsheetApp.open(file);
    var name = spreadsheet.getSheetByName(sheet_name);
    for (var n = 1; n < 4; n++) {
      var range = name.getRange(y, n);
      var value = range.setValue(arr[n - 1]);  
    }
  }
}