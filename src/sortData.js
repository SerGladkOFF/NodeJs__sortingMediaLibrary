 const fs = require('fs')
 const path = require('path')

function sortData(basePath,newDir){
     try {
        const files = fs.readdirSync(basePath);
        files.forEach(item=>{
           try {
            const localPath = path.join(basePath,item)
            const state = fs.statSync(localPath)
            if (state.isDirectory())  {
                sortData(localPath,newDir)
            } else {
                if (!fs.existsSync(newDir)) fs.mkdirSync(newDir)
                 const folderName = item.charAt(0);
                 const _path = path.join(newDir,folderName)
                 //если не существует папки то создать
                 if (!fs.existsSync(_path)) fs.mkdirSync(_path)
                  //если файла нет то создать копию
                 if (
                     !fs.existsSync(
                         path.resolve(newDir,folderName,item)
                        )
                    ) {
                    fs.linkSync(
                        localPath,
                        path.resolve(newDir,folderName,item)
                      )
                  }
            }
        //Ошибка при парсинге
        } catch (error) {
                console.log("Ошибка при парсинге",error)
                return false
           }
        })
    //Ошибка при чтении
     } catch (error) {
        console.error(`Нет файлов/папок в директории ${basePath}`,error)
        return false
     }

     return true
 }

function recursiveDeleteFolder(filepath) {
  if (fs.existsSync(filepath)) {
    var files = fs.readdirSync(filepath);
    files.forEach(function(filename) {
      var curPath = path.join(filepath, filename);
      if (fs.lstatSync(curPath).isDirectory()) {
        recursiveDeleteFolder(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(filepath);
  }
};

 module.exports = {
    sortData,
    recursiveDeleteFolder
 }