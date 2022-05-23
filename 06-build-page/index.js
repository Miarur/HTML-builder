const path = require('path'); 
const fs = require('fs'); 
const fsProm = fs.promises;
const directory = path.join(__dirname);
const assets = path.join(__dirname, 'assets');
const project_dist_assets =  path.join(__dirname, 'project-dist/assets');

console.log('==== 6 задание не выполнено , но  в процессе, при оценке задания , укажите пожалуйста ваши контактные данные для связи =====');
console.log('=== Спасибо вам, и хорошего настроения! ===')


// function miniBundle(assets, project_dist_assets) {
//   fsProm.mkdir(`${directory}/project-dist`, { recursive: true } ).then( () => {
//     fs.readdir((`${assets}`), (err, fileList) => {
//       if(err) throw err;

//       fileList.forEach( file => {
//         let way = path.join(directory, file);
//         fs.stat(way, (error, file_item) => {
//           if(file_item.isFile() === true ) {
//             fs.copyFile(path.join(__dirname, file), path.join(__dirname, 'project-dist', file), (err) => {
//               if(err) throw err;
//               console.log('file copied ++++ ' + path.basename(file));

//             }) 
//           } else {
//             if(error) throw error;
//             console.log('file is Folder ---- ' + path.basename(file));
//             return miniBundle(path.join(__dirname, `${file}`), path.join(__dirname, `${project_dist_assets}`));

//           }
//         })
//       })
//     })
//   })
// }

// miniBundle(assets, project_dist_assets);
