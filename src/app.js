const interface = require('./Interface') 
const {
    sortData,
    recursiveDeleteFolder
}=require('./sortData')

const sortMediaData = async ()=>{
    try {
        const {
            baseDir,
            newDir,
            deleteFlag
        } =await interface()
    
        const _sortData=await sortData(baseDir,newDir)
        if (_sortData) {
            console.log("данные отсортированы") 
            if (deleteFlag) {
                if (
                    recursiveDeleteFolder (baseDir)
                ) console.log("исходная папка удалена") 
             }
        }
    } catch (error) {
        console.log('error',error)
    }
    process.exit(1);
}

sortMediaData()
