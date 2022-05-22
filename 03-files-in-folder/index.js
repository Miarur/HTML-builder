const path = require('path'); 
const fs = require('fs'); 
const directory = path.join(__dirname, 'secret-folder');

function showFilesInDir(directory) {

  fs.readdir(directory, (error, dirEntryList) => {
    if(!error) {
      dirEntryList.forEach( (dirEntry) => {
        let way = path.join(directory, dirEntry);

        fs.stat(way, (error, stats) => {
          if(stats.isFile() === true) {
            let extention = path.extname(`${directory}/${dirEntry}`).slice(1);
            let name = path.basename(dirEntry).slice(0, dirEntry.lastIndexOf('.'))
            console.log(' =====>  ' + name + ' - ' + extention + ' - ' + Math.ceil(stats.size / 1024) + 'кб'+ ' <===== ');
          } else {
            if(error) throw error;
          }
        })
      })
    } else {
      console.error(error);
    }
  });
}

showFilesInDir(directory);

