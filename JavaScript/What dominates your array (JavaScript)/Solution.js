function dominator(arr) {
  let map = {}
  let result = -1
  let longest = [0]
  const threshold = arr.length / 2
  
  for(const i in arr){
    if(arr[i] in map)
      map[arr[i]]++
    else
      map[arr[i]]=1
    if (map[arr[i]] > longest[0])
      longest = [map[arr[i]], arr[i]]
  }
  
  if (longest[0] > threshold)
    result = parseInt(longest[1])  
   
  return result
}