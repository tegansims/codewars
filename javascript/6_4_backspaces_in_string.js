function cleanString(s) {

    let ans = []
    for (i=0; i<s.length; i++) {
      s[i] ==='#' ? ans.pop() : ans.push(s[i])
    }
    return ans.join('')
  };