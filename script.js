// check if the browser supports indexed db
if (!window.indexedDB) {
    alert("This extension does not support your browser.");
}

// open database
var db;
var request = window.indexedDB.open("baguette-tab-db", 3);

request.onerror = function(event) {
	alert("Please allow the extension to use indexedDB within your browser.")
	// console.log(request.errorCode);
};
request.onsuccess = function(event) {
	db = event.target.result;
};

db.onerror = function(event) {
  alert("Database error: " + event.target.errorCode);
};