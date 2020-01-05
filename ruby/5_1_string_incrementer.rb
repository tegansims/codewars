def increment_string(input)
    last = Integer(input[-1]) rescue false
    if !last
        input + '1' 
    else
        input.gsub(input[/\d+$/], input[/\d+$/]&.next)
    end
end