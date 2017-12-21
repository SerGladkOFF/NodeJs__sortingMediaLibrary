const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
 });

const consoleQuestion = (question)=>{
    return new Promise((resolve,reject)=> {
        rl.question(
            question, 
            answer => resolve(answer)
        )
    })
}
 async function showInterface(){

       let baseDir="",newDir,deleteFlag;
       while (!path.isAbsolute(baseDir)) {
            baseDir = await consoleQuestion('Введите полный путь где вы хотите отсортировать данные: ')
       }
       
       newDir = await consoleQuestion('Введите полный путь куда надо скопировать данные? *не обязательно: ')
       if (!path.isAbsolute(newDir)) {
            console.log("Вы не ввели директорию для копирования,отсортированнеы файлы будут лежать в текущнй директории в папке sort")
            newDir=baseDir+'/SORT'
       }

       deleteFlag = await consoleQuestion('Нужно удалять исходную папку?[y/n] * не обязательно:')
       if (deleteFlag.toLowerCase() =='y'
            ||deleteFlag.toLowerCase() =='n') {
            console.log("введены верные значениеы")
            deleteFlag= deleteFlag.toLowerCase()==="y"?true:false
       }else {
            console.log('Флаг на удаление не установлен ,исходная директория не будет удалена') 
            deleteFlag=false
       }

       return {
            baseDir,
            newDir,
            deleteFlag
       }
 }

module.exports = showInterface