const path = require('path'); 
const fs = require('fs'); 
const { resolve } = require('path');
const fsProm = fs.promises;
const directory = path.join(__dirname);
const folder_Files = path.join(__dirname, 'files');
const del_path = path.join(__dirname, 'files-copy');


fs.rm(`${del_path}`, {recursive: true, force: true}, () => {
  console.log('folder has been delete');
  fsProm.mkdir(`${directory}/files-copy`, { recursive: true } ).then( () => {
    console.log('folder has been create');
    fs.readdir(path.join(__dirname, 'files'), (err, fileList) => {
      if(err) throw err;
      console.log(fileList);
      fileList.forEach( file => {
        fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file), (err) => {
          if(err) throw err;
        })
      })
    })

  })
});














