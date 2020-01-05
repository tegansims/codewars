def comp(array1, array2)
    return !array1 || !array2 ? false : array1.sort.map{ |a| a * a } == array2.sort
end