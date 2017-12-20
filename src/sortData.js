 const fs = require('fs')
 const path = require('path')

 const sortData  = async (basePath,newDir,deleteRoot)=>{
     const _readDir = readDir(basePath,newDir,deleteRoot)
     if (_readDir) {
        if (deleteRoot) fs.rmdirSync(basePath)
        //console.log("deleteRoot")
        return true
     } else return false
     
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

                if (!fs.existsSync(newDir)) fs.mkdirSync(newDir)

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
                      fs.unlinkSync(localPath)
                  }
            }} catch (error) {
                console.log("Ошибка при парсинге",error)
                return false
           }
        })
     } catch (error) {
        console.error(`Нет файлов/папок в директории ${basePath}`,error)
        return false
     }

     return true
 }

 module.exports = sortData