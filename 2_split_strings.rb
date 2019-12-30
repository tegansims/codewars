def solution(str)
    # split the string into an array of elements with length 2
    ary = str.scan(/.{1,2}/m)
    # if the last element has length of 1, add an '_' to it
    ary[-1].length == 1  &&  ary[-1] += '_'
    # return the whole array
    ary
  end