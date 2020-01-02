function duplicateCount(text){
    let array = text.toLocaleLowerCase().split('').sort()
    let uniqArray = [...new Set(array)]
    
    if (array.length === uniqArray.length) return 0
    
    const aCount = uniqArray.map(
      x => [x, array.filter(y => y === x).length]
    );
  
    return aCount.filter(x => x[1] > 1).length
  }