function myFunction() {
 
  var template = DocsList.getFileById('0AgT8raiasqASdGJwaEhERHVrandBT0R1NVVfQUtZYnc');   
  var federal = SpreadsheetApp.openById('0AgT8raiasqASdDdhdDNXRE5DZDN3ZGU4aHpPX2YtY3c');
  var sheetFederal = federal.getSheets()[0];
  
  var generator = SpreadsheetApp.openById('0AgT8raiasqASdEEtOXVlcW02UDNxTlR6aVVRdmFTdkE');
  var sheetGenerator = generator.getSheets()[0];
  var rangeGenerator = sheetGenerator.getRange(1,1);  
  for (var i = 1; i < 7; i++) {
  var start = rangeGenerator.getValue();

  var range = sheetFederal.getRange(start, 1);
  var name = range.getValue();
  var copy = template.makeCopy(name);
  var copyId = copy.getId();
  var copySpreadsheet = SpreadsheetApp.openById(copyId);
  var copySheet = copySpreadsheet.getSheets()[0];
  var copyRange = copySheet.getRange(1,1);
  var copyValue = copyRange.setValue(start);
  
  rangeGenerator.setValue(parseInt(start) + 1);
  }
}