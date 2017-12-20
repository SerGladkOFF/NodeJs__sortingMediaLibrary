 const fs = require('fs')
 const path = require('path')

 const sortData  = async (basePath,newDir,deleteRoot)=>{
     const _readDir = await readDir(basePath,newDir,deleteRoot)
     console.log("_readDir",_readDir)
     if (_readDir) {
        if (deleteRoot){
            //const _delete = await deleteDir(basePath)
            console.log("_delete",deleteRoot)
        } 
        return true
     } else return false
     
 }

 async function readDir(basePath,newDir,deleteRoot){
     try {
        const files = fs.readdirSync(basePath);
        files.forEach(item=>{
           try {
            const localPath = path.join(basePath,item)
            const state = fs.statSync(localPath)
            if (state.isDirectory())  {
                readDir(localPath,newDir,deleteRoot)
              
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
                      console.log(deleteRoot)
                      if (deleteRoot) fs.unlinkSync(localPath)
                  }
            }
        } catch (error) {
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

async function deleteDir(basePath){
        
        const files = fs.readdirSync(basePath);
        files.forEach(item=>{
            const localPath = path.join(basePath,item)
            fs.rmdir(localPath)
        })
 }

 module.exports = sortData