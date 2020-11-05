var http = require('http');
var fs = require('fs');
var url = require('url')

function templateHTML(title, list, description,body) {
  var template = `<!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${body}
  </body>
  </html>
  `;

  return template;
}

function templateList(files) {
  var list = '<ul>';
  files.forEach(file => {
    list += `<li><a href="/?id=${file}">${file}</a></li>`
  });
  list = list + '</ul>';

  return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id

    if(pathname === '/') {
      if(queryData.id === undefined) {

        fs.readdir('./data', (err, files) => {

          var title = 'Welcome';
          var description = "Hello, Node.js";

          var list = templateList(files);
          var template = templateHTML(title, list, description, `<h2>${title}</h2>
          <p>${description}</p>`);
          response.writeHead(200);
          response.end(template);
        });

      } else {
        fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
          
          fs.readdir('./data', (err, files) => {
  
            var list = templateList(files);
            var template = templateHTML(title, list, description, `<h2>${title}</h2>
            <p>${description}</p>`);
            response.writeHead(200);
            response.end(template);
          })
          
        });
      }
    } else {
      response.writeHead(404);
      response.end('Not found');
    }



 
});

app.listen(3000);