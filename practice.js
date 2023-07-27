function narcissistic(value) {
 let m = String(value).split("").reduce((acc,current)=>acc + Math.pow(Number(current), String(value).length), 0)
 console.log(m)

 return m % String(value) ? false:true


  }

  console.log(narcissistic(153))
  