var template = {
    html: function (title, list, body, control) {
      var template = `<!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        ${control}
        ${body}
      </body>
      </html>
      `;
    
      return template;
    },
  
    list: function (files) {
      var list = '<ul>';
      files.forEach(file => {
        list += `<li><a href="/?id=${file}">${file}</a></li>`
      });
      list = list + '</ul>';
    
      return list;
    }
  }

  module.exports = template