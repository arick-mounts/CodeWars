def t_area(t_str):
    
    #height is tracked by number of '\n' characters.  Since height and width have a 1-1 relationship, 
    #only height is tracked, any scenario where height and width are not correleated will not work.
    
    #Height is initilized to negative 2 to remove the beginning and ending '\n' from consideration
    #and give an accurate count of the height
    height = -2
    
    #iterate over string
    for element in t_str:
        #increase height when 'n' is encountered
        if element == '\n':
            height +=  1
    #calculates the area and returns the answer to the caller
    return (height * height) / 2
    pass 