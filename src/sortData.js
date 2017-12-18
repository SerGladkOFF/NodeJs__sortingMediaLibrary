 const fs = require('fs')
 const path = require('path')

 const sortData  = (basePath,newDir)=>{
     readDir(basePath,0)
 }


 function readDir(basePath,level=0){
     try {
        const _files = fs.readdirSync(basePath,(err,files)=>{
            if (err) {
                console.error("ERROR",err)
                return err
            }
            return files
        })
        _files.forEach(item=>{
            const localPath = path.join(basePath,item)
            const state = fs.statSync(localPath)
            let flag;
            if (state.isDirectory())  {
                flag=' Dir : '
                readDir(localPath,level+1)
            } else flag=' File : '
            console.log(' '.repeat(level)+flag+item)
        })
     } catch (error) {
        console.error(`Нет файлов/папок в директории ${basePath}`,error)
     }
 }

 module.exports = sortData