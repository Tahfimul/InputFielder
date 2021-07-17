function myFunction() {
  
  var firebaseUrl = "https://YOUR-FIREBASE-PROJECT-ID.firebaseio.com";
  var email = "YOUR-FIREBASE-PROJECT-ID@appspot.gserviceaccount.com";
  const key = "-----BEGIN PRIVATE KEY-----\nYour Firebase\nSecret Key\n\n-----END PRIVATE KEY-----\n";
  var projectId = "YOUR-FIREBASE-PROJECT-ID";
  var apiVersion = "v1";
  
  var db = FirestoreApp.getFirestore(email, key, projectId, apiVersion);
  
  const path = "";

  //To get spreadsheet id see: https://developers.google.com/sheets/api/guides/concepts
  var mySheet = SpreadsheetApp.openById("YOUR-GOOGLE-FORMS-FORM-SPREADSHEET-ID");

  var dataSheet = mySheet.getSheets()[1];
  var lastRow = mySheet.getLastRow();
  var lastColumn = mySheet.getLastColumn();
  var data = mySheet.getSheetValues(1, 1, lastRow, lastColumn);
  var dataToImport = {};
  
  const post = db.createDocument(path, dataToImport);

}
