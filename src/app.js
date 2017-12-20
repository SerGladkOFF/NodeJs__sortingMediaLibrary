const interface = require('./Interface') 
const sortData=require('./sortData')

const sortMediaData = async ()=>{
    try {
        const {
            baseDir,
            newDir,
            deleteFlag
        } =await interface()
    
        const _sortData=await sortData(baseDir,newDir,deleteFlag)
        if (_sortData) console.log("данные отсортированы") 
        else {
            console.log("произошла ошибка,повторите попытку снова");
            sortMediaData()
        }
    } catch (error) {
        console.log('error',error)
        sortMediaData()
    }

}

sortMediaData()
