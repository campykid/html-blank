
// Заполнить болванкой
var skelet = [ 
'<!DOCTYPE html>',
'\n<html>',
'\n<head>\n\t<meta charset="UTF-8">',
'\n\t<title>Document</title>',
'\n</head>',
'\n\t<body>',
'\n',	
'\n\t</body>',
'\n</html>'
].join('')


// Созадать файл
var fs = require('fs');
fs.writeFile("index.html ", skelet, function(err) {
    if(err) throw err;
    console.log("The file was created!");
});
