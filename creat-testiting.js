
var fs = require('fs');

// Добавляет Jquery, если есть аргумент j или Jquery.
var Jquery = null;
for (var i = process.argv.length - 1; i >= 0; i--) {
	if (process.argv[i] === 'j' || process.argv[i] === 'Jquery' || process.argv[i] === '-j' ) {
		Jquery  = '\n\t<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>'
	};
};

// Болванка.
var skelet = [ 
'<!DOCTYPE html>',
'\n<html>',
'\n<head>\n\t<meta charset="UTF-8">',

Jquery,

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
var path = process.argv[2].charAt(0) === '/' ? path = process.argv[2]: path = '' ;

// Созадает файл с болванкой.
// Если переменная path пуста, создает файл в директории с программой.
fs.writeFile(path + "index.html", skelet, function(err) {
    if(err) throw err;
    console.log("The file was created!");
});

