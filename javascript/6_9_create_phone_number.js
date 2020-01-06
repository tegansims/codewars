function createPhoneNumber(numbers){
    return `(${chunked(numbers, 0, 3)}) ${chunked(numbers, 3, 6)}-${chunked(numbers, 6, 10)}`
}

function chunked(input, x, y) {
    return input.slice(x, y).join('')
}