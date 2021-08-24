const fs = require('fs');

const scss = require('path').resolve(__dirname, '..') + '/scss/';

console.log('scss', )

process.argv.forEach((val, index, array) => {
  if (index >= 2) {
    fs.writeFile(`${scss}components/${val}.scss`, `.${val} { ` + '\n' + '  $c: &;' + '\n' + '}', () => {});

    fs.appendFile(`${scss}index.scss`, `${'\n' + '@import "components/'}${val}";`, (err) => {
      if (err) throw err;
      console.log('Saved!');
    });
  }
});
