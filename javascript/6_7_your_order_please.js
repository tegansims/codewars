function order(words){
    let ary = []
    words.split(" ").forEach(word =>
      ary.push( [word.replace(/[^1-9]/g, ''), word] ) 
    )
    
    let ary2 = ary.sort( (a, b) => a[0] - b[0] )
    
    return ary2.map(el =>  el[1]).join(" ")
}

// OR

function order2(words){    
    
    ordered = words.split(" ").sort( (a, b) => a.match(/\d/) - b.match(/\d/))

    return ordered.join(' ')
}