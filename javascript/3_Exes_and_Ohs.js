function XO(str) {
    let xs = str.match(/[xX]/g) 
    let os = str.match(/[oO]/g) 
    
    if (!xs && !os) return true
    return xs && os && xs.length == os.length ? true : false
}

console.log(XO('xo'))
console.log(XO("xxOo"))
console.log(XO("xxxm"))
console.log(XO("Oo"))
console.log(XO("ooom"))