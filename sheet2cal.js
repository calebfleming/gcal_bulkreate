function sheetCal() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // First row of data to process
  var numRows = sheet.getLastRow();   // Number of rows to process
  var dataRange = sheet.getRange(startRow, 1, numRows, 4);
  var data = dataRange.getValues();
  var cal = CalendarApp.getCalendarById('Input CalendarId');
  for (i in data) {
    var row = data[i];
    var title = row[0];  
    var tstart = row[1];
    var tstop = row[2];
    var loc = row[3];
    cal.createEvent(title, new Date(tstart), new Date(tstop), {location:loc});
 }
}