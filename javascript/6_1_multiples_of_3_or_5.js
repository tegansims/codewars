function solution(number){
    let ans = 0;
    
    for (j=1; j<number; j++) {
      if (j % 3 == 0|| j % 5 == 0) {
        ans = ans + j
      }
    }
    return ans
  
  }

  console.log(solution(10))