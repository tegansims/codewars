def rgb(r, g, b)
    convert2(r) + convert2(g) + convert2(b)
end

def convert(s)
  if s > 255
    "FF"  
  elsif s < 0
    '00'
  else
    ans = s.round.to_s(16).upcase.rjust(2, '0')
  end
end

# rjust(x, y) 
    # pads out the left, with the y elements, to make a new string totalling x chars
    # if y is left blank, will pad it out with blank spaces
    # if the original string is longer than x, returns a copy of the original string (ie no deleting)