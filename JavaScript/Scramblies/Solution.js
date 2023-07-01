function scramble(str1, str2) {
    const map1 = {}, map2 = {};
    var i = str1.length;
    while (i--) {
      if(map1[str1.charAt(i)]){
        map1[str1.charAt(i)]++
      }else{
        map1[str1.charAt(i)] = 1;
      }
    }
    var i = str2.length;
    while (i--) {
      if(map2[str2.charAt(i)]){
        map2[str2.charAt(i)]++
      }else{
        map2[str2.charAt(i)] = 1;
      }
    }
    
    for(i in map2){
      if(!map1[i] || map1[i] < map2[i]){
        return false
      }
    }
    return true;
  }