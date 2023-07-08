function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let height = 0
    let day = 0
    while (true){
      day+=1
      height += upSpeed
      if(height >= desiredHeight){
        break;
      }
      height -=downSpeed
    }
    return day
  }