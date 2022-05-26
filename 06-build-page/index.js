const path = require('path'); 
const fs = require('fs'); 
const fsProm = fs.promises;
const output = fs.createWriteStream(path.join(__dirname, "project-dist", "index.html"),"utf-8");

let template = "";
const readTemplate = fs.createReadStream(path.join(__dirname, "template.html"),"utf-8");

readTemplate.on("data", (chunk) => {
  let newChunk = chunk;

  fs.readdir(path.join(__dirname, "components"), (err, data) => {
    if (err) throw err;
    data.forEach((file, i) => {
      const readComponent = fs.createReadStream(path.join(__dirname, "components", file),"utf-8");
      readComponent.on("data", (componentChunk) => {
        const name = file.split(".")[0];
        const reg = new RegExp(`\{\{${name}\}\}`, "g");
        newChunk = newChunk.replace(reg, componentChunk);

        if (i === data.length - 1) {
          output.write(newChunk);
        }
      });
    });
  });

  template += chunk;
});


fsProm.mkdir(path.join(__dirname, 'project-dist'), { recursive: true }).then(() => {
  const bundleCss = fs.createWriteStream(path.join(__dirname, 'project-dist', 'style.css'));
  fsProm.readdir(path.join(__dirname, 'styles'), {withFileTypes: true}).then(fileList => {
    fileList.forEach(filename => {
      const filePath = path.join(__dirname, 'styles', filename.name);
      if(filename.isFile() && path.extname(filePath) === '.css') {
        fs.createReadStream(filePath).pipe(bundleCss);
      } 
    });
  });
});


function copy(currentDir, copyDir) {
  fsProm.mkdir(copyDir, { recursive: true }).then(() => {
    fsProm.readdir(currentDir, {withFileTypes: true}).then(fileList =>  fileList.forEach(file => {
      if(file.isFile()) {
        fsProm.copyFile(path.join(currentDir, file.name), path.join(copyDir, file.name));
      }
      else {
        copy(path.join(currentDir, file.name), path.join(copyDir, file.name));
      }
    }));
  });
}


function copyFolder(currentPath, copyPath) {
  fs.rm(copyPath, {recursive: true, force: true}, () => copy(currentPath, copyPath));
}

copyFolder(path.join(__dirname, 'assets'), path.join(__dirname, 'project-dist', 'assets'));


