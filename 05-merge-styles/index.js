const path = require('path'); 
const fs = require('fs'); 
const directory = path.join(__dirname, 'styles');
const writeStream = fs.createWriteStream(path.join(__dirname, 'project-dist/bundle.css'));

function megreStyles() {
  fs.readdir(path.join(__dirname, 'styles'), (error, files) => {
    if(error) throw error; 
    files.forEach( (file) => {
      let way = path.join(directory, file);
  
      fs.stat(way, (error, stats) => {
        if(stats.isFile() === true) {
          let extention = path.extname(`${directory}/${file}`).slice(1);
          if(extention === 'css') {
            const readStream = fs.createReadStream(path.join(__dirname, `styles/${file}`));
            readStream.pipe(writeStream);
          }
        } else {
          if(error) throw error;
        }
        ;
      })
    })
  })
}

megreStyles();

