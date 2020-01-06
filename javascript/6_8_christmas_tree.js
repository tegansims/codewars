function christmasTree(height) {
    let ans = ''
  
    for (i=1; i<=height; i++) {
      line = '*'.repeat((i*2)-1).padStart((height+i-1), ' ').padEnd((height*2)-1, ' ')
      if (i < height) {
        ans = ans + line + '\n'
      } else {
        ans = ans + line
      }
    }
    return ans
  }

  console.log(christmasTree(15))
  console.log(christmasTree(4))
