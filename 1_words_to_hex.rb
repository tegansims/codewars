def words_to_hex(words)
    # split the sentence into words, and extract the first three characters of each word
      splitted = words.split(" ").map{|word| word[0..2] }
    
    # call the hexed method on each word of the sentence
    # return each hexed word, plus a #
      return splitted.map{ |word| "#" + hexed(word)}
    end
    
    def hexed(word)
    # split each word into characters
    # map through each character, find the ordinal integer and then convert that into hex (to_s(16))
    # join the word back up (join(""))
    # add the maximum number of 0s at the end, regardless of the original word length
    
      output = word.split("").map { |x| x.ord.to_s(16) }.join("") + "0000"
    
    # extract and return just the first 6 characters 
      output[0..5]
    end