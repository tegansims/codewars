function digital_root(n) {
    let input = n
    while (n < 10) {
      nums = input.toString().split("").map(x => Number(x))
      input = nums.reduce((a, b) => a + b, 0)
    }
    return input
  }

//  OR

function digital_root2(n) {
    n = n.toString().split("").map(x => Number(x)).reduce((a, b) => a + b, 0)

    if (n > 10) return digital_root2(n)
    return n
  }