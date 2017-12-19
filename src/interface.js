const path = require('path');
const sortData=require('./sortData')
const readline = require('readline');
const axios  = require("axios")

//вывести описание
function showInterface(){
    console.log(
        `==============================================
         Описание работы программы:
         ==============================================`
    )
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    
    const sortCondig={}
    
    function getUnsortFolderPath() {
        rl.question('Введите полный путь где вы хотите отсортировать данные: ', (answer) => {
            if (!answer.length) getUnsortFolderPath()
            else {
                sortCondig.basePath=answer
                getNewDirFolder()
            } 
          })
      }
    
      function getNewDirFolder(){
        rl.question('Введите полный путь куда надо скопировать данные? *не обязательно: ', (answer) => {
            sortCondig.newDir=answer
            setFlagToDeleteRootFolder()
          })
      }
    
      function setFlagToDeleteRootFolder(){
        rl.question('Удалить рутовую папку?[true/false] * не обязательно: ', (answer) => {
            sortCondig.deleteRoot=answer
            sortData(sortCondig)
          })
      }
      
      getUnsortFolderPath()

}



module.exports = showInterface


    


//     const basePath  = await getBasePath()
//     const newDir  = await setNewDir()
//     const flagToDeleteRootDir = await deleteRootDir()
//     const result =await sortData(basePath,newDir)
// }

// async  function getBasePath(basePath){
    
//     const _basePath=path.normalize('D:/LOL');
//     return _basePath
// }
// async  function setNewDir(newDir){
//     const _newDir=path.normalize('D:/test');
//     return _newDir
// }
// async  function deleteRootDir(flag){
//     return false
// }