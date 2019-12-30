def find_missing(seq)
    #   find the constant difference
      prog = (seq[-1] - seq[0]) / seq.length
      
    #  build what the correct array should be 
      array = []
      x = 0
      while x < seq.length-1
        array.push(seq[x] + prog)
        x += 1
      end
      
    #   return the element that's in the correct array, but not the given seq
      (array - seq)[0]
end