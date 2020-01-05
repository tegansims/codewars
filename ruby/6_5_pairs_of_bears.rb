def bears(x, s)
    a = s.scan(/B8|8B/).join('')
    ans = [a, a.length/2 >= x]
end