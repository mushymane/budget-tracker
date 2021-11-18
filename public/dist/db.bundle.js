/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/db.js":
/*!**********************!*\
  !*** ./public/db.js ***!
  \**********************/
/***/ (() => {

eval("var db;\nvar request = indexedDB.open(\"budget\", 1);\n\nrequest.onupgradeneeded = function (event) {\n  var db = event.target.result;\n  console.log(\"event.target.result: \", db);\n  db.createObjectStore(\"pending\", {\n    autoIncrement: true\n  });\n};\n\nrequest.onsuccess = function (event) {\n  db = event.target.result;\n\n  if (navigator.onLine) {\n    checkDatabase();\n  }\n};\n\nrequest.onerror = function (event) {\n  console.log(\"Error:\", event.target.errorCode);\n};\n\nfunction saveRecord(record) {\n  var transaction = db.transaction([\"pending\"], \"readwrite\");\n  var store = transaction.objectStore(\"pending\");\n  store.add(record);\n}\n\nfunction checkDatabase() {\n  var transaction = db.transaction([\"pending\"], \"readwrite\");\n  var store = transaction.objectStore(\"pending\");\n  var getAll = store.getAll();\n\n  getAll.onsuccess = function () {\n    if (getAll.result.length > 0) {\n      fetch(\"/api/transaction/bulk\", {\n        method: \"POST\",\n        body: JSON.stringify(getAll.result),\n        headers: {\n          Accept: \"application/json, text/plain, */*\",\n          \"Content-Type\": \"application/json\"\n        }\n      }).then(function (response) {\n        return response.json();\n      }).then(function () {\n        var transaction = db.transaction([\"pending\"], \"readwrite\");\n        var store = transaction.objectStore(\"pending\");\n        store.clear();\n      });\n    }\n  };\n}\n\nwindow.addEventListener(\"online\", checkDatabase);\n\n//# sourceURL=webpack://budget-app/./public/db.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/db.js"]();
/******/ 	
/******/ })()
;