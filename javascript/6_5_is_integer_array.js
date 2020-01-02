function isIntArray(arr) {
    if (!arr) return false
  
    for (i=0; i<arr.length; i++) {
      if (!Number.isInteger(arr[i])) return false 
    }
    return true
  }


// OR

function isIntArray2(arr) {
    return !!arr && arr.every(Number.isInteger)
}