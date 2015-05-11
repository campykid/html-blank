
var fs = require('fs');

// Болванка.
var skelet = [ 
'<!DOCTYPE html>',
'\n<html>',
'\n<head>\n\t<meta charset="UTF-8">',
'\n\t<title>Document</title>',
'\n\t<style>',
'\n',
'\n\t</style>',
'\n</head>',
'\n\t<body>',
'\n',	
'\n\t</body>',
'\n\t<script type="text/javascript">',
'\n',
'\n\t</script>',
'\n</html>'
].join('')

// Путь к файлу - если задан аргументом.
var path = process.argv[2] ? path = process.argv[2]: path = '' ;

// Созадает файл с болванкой.
// Если переменная path пуста, создает файл в директории с программой.
fs.writeFile(path + "index.html", skelet, function(err) {
    if(err) throw err;
    console.log("The file was created!");
});
