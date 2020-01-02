function century(year) {
    c = year / 100
    return (year % 100) ? Math.floor(c) + 1 : Math.floor(c)
}

console.log(century(1900))
console.log(century(1899))