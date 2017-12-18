const path = require('path');
const sortData=require('./sortData')
//вывести описание
async function showInterface(){
    console.log("==============================================")
    console.log("Описание работы программы")
    console.log("==============================================")

    const basePath  = await getBasePath()
    const newDir  = await setNewDir()
    const flagToDeleteRootDir = await deleteRootDir()
    const result =await sortData(basePath,newDir)
}

async  function getBasePath(basePath){
    
    const _basePath=path.normalize('D:/Desktop/MUSIC/');
    return _basePath
}
async  function setNewDir(newDir){
    const _newDir=path.normalize('D:/Desktop/node/test/hw1');
    return _newDir
}
async  function deleteRootDir(flag){
    return false
}



module.exports = showInterface