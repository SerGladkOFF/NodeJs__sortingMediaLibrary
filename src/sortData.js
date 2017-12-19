 const fs = require('fs')
 const path = require('path')

 const sortData  = ({basePath,newDir,deleteRoot})=>{
     readDir(basePath,newDir)
     if (deleteRoot) console.log("deleteRoot")
 }

 function readDir(basePath,newDir){
     try {
        const files = fs.readdirSync(basePath);
        files.forEach(item=>{
           try {
            const localPath = path.join(basePath,item)
            const state = fs.statSync(localPath)
            if (state.isDirectory())  {
                readDir(localPath,newDir)
            } else {
                 const folderName = item.charAt(0);
                 const _path = path.join(newDir,folderName)
                 //если не существует папки то создать
                 if (!fs.existsSync(_path)) fs.mkdirSync(_path)
                  //если файла нет то создать копию
                 if (!fs.existsSync(path.resolve(newDir,folderName,item))) {
                    fs.linkSync(
                        localPath,
                        path.resolve(newDir,folderName,item)
                      )
                  }
            }} catch (error) {
                console.log("Ошибка при парсинге",error)
           }
        })
     } catch (error) {
        console.error(`Нет файлов/папок в директории ${basePath}`,error)
     }
 }

 module.exports = sortData