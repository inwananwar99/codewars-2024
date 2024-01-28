function group(arr){
    let subArray = []
    arr.forEach(item => {
        itemArray = []
        arr = arr.filter((duplicateItem)=>{
            if(item == duplicateItem){
                itemArray.push(item)
            return false
            }
            return true
        })

        if(itemArray.length > 0)
        subArray.push(itemArray)
    });
    return subArray
}

console.log(group([1,2,4,2,4,1]))