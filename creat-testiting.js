
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


// Созадает файл с болванкой.
var fs = require('fs');
fs.writeFile("index.html ", skelet, function(err) {
    if(err) throw err;
    console.log("The file was created!");
});
