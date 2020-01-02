function alphabetPosition(text) {
    let ans = []
    let stripped = text.toLocaleLowerCase().replace(/[^a-z]/g, '')
    for (i=0; i<stripped.length; i++) {
      ans.push(stripped.charCodeAt(i)-96, ' ')
    }
    ans.pop()
    return ans.join('')
  }